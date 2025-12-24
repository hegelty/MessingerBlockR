/**
 * 카카오톡 봇 블록 코딩 에디터 - JavaScript 코드 생성기
 * MessengerBot R API2 기반
 */

// JavaScript 생성기 확장
const kakaoGenerator = Blockly.JavaScript;

// 한글 변수명을 그대로 사용하도록 설정
kakaoGenerator.RESERVED_WORDS_ = '';

// 변수 자동 선언 비활성화
kakaoGenerator.finish = function(code) {
    // 기본 finish 함수가 변수 선언을 추가하는데, 이를 건너뜀
    return code;
};

// 변수명을 안전하게 가져오는 헬퍼 함수
function getSafeVariableName(variable) {
    if (!variable) return 'item';
    return variable.name || variable;
}

// 봇 초기화
kakaoGenerator.forBlock['kakao_bot_init'] = function(block, generator) {
    let handlers = generator.statementToCode(block, 'HANDLERS');
    let code = 'const bot = BotManager.getCurrentBot();\n\n';
    code += handlers;
    return code;
};

// 명령어 프리픽스 설정
kakaoGenerator.forBlock['kakao_set_prefix'] = function(block, generator) {
    let prefix = block.getFieldValue('PREFIX');
    return `bot.setCommandPrefix("${prefix}");\n`;
};

// 메시지 이벤트 핸들러 - 고유 ID 사용
kakaoGenerator.forBlock['kakao_on_message'] = function(block, generator) {
    let statements = generator.statementToCode(block, 'DO');
    let funcName = 'onMessage_' + block.id.replace(/[^a-zA-Z0-9]/g, '_');
    let code = `function ${funcName}(msg) {\n`;
    code += `    try {\n`;
    code += statements.split('\n').map(line => line ? '        ' + line : '').join('\n');
    code += `\n    } catch (e) {\n`;
    code += `        Log.e(e);\n`;
    code += `    }\n`;
    code += `}\n\n`;
    code += `bot.addListener(Event.MESSAGE, ${funcName});\n`;
    return code;
};

// 명령어 이벤트 핸들러 - 고유 ID 사용
kakaoGenerator.forBlock['kakao_on_command'] = function(block, generator) {
    let command = block.getFieldValue('COMMAND');
    let statements = generator.statementToCode(block, 'DO');
    let funcName = 'onCommand_' + command.replace(/[^a-zA-Z0-9가-힣]/g, '_') + '_' + block.id.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 8);
    let code = `function ${funcName}(msg) {\n`;
    code += `    try {\n`;
    code += `        if (msg.command === "${command}") {\n`;
    code += statements.split('\n').map(line => line ? '            ' + line : '').join('\n');
    code += `\n        }\n`;
    code += `    } catch (e) {\n`;
    code += `        Log.e(e);\n`;
    code += `    }\n`;
    code += `}\n\n`;
    code += `bot.addListener(Event.COMMAND, ${funcName});\n`;
    return code;
};

// 봇 시작 시 실행
kakaoGenerator.forBlock['kakao_on_start'] = function(block, generator) {
    let statements = generator.statementToCode(block, 'DO');
    let funcName = 'onStart_' + block.id.replace(/[^a-zA-Z0-9]/g, '_');
    let code = `function ${funcName}() {\n`;
    code += `    try {\n`;
    code += statements.split('\n').map(line => line ? '        ' + line : '').join('\n');
    code += `\n    } catch (e) {\n`;
    code += `        Log.e(e);\n`;
    code += `    }\n`;
    code += `}\n\n`;
    code += `bot.addListener(Event.START, ${funcName});\n`;
    return code;
};

// 스크립트 컴파일 시 실행
kakaoGenerator.forBlock['kakao_on_compile'] = function(block, generator) {
    let statements = generator.statementToCode(block, 'DO');
    let code = `// 스크립트 컴파일 시 실행\n`;
    code += `(function() {\n`;
    code += `    try {\n`;
    code += statements.split('\n').map(line => line ? '        ' + line : '').join('\n');
    code += `\n    } catch (e) {\n`;
    code += `        Log.e(e);\n`;
    code += `    }\n`;
    code += `})();\n`;
    return code;
};

// 메시지 답장 (값 입력)
kakaoGenerator.forBlock['kakao_reply'] = function(block, generator) {
    let message = generator.valueToCode(block, 'MESSAGE', generator.ORDER_ATOMIC) || '""';
    return `msg.reply(${message});\n`;
};

// 메시지 답장 (텍스트 직접 입력)
kakaoGenerator.forBlock['kakao_reply_text'] = function(block, generator) {
    let text = block.getFieldValue('TEXT');
    return `msg.reply("${text}");\n`;
};

// 메시지 정보 (통합 블록)
kakaoGenerator.forBlock['kakao_msg_info'] = function(block, generator) {
    let property = block.getFieldValue('PROPERTY');
    return [`msg.${property}`, generator.ORDER_MEMBER];
};

// 메시지 내용
kakaoGenerator.forBlock['kakao_msg_content'] = function(block, generator) {
    return ['msg.content', generator.ORDER_MEMBER];
};

// 방 이름
kakaoGenerator.forBlock['kakao_msg_room'] = function(block, generator) {
    return ['msg.room', generator.ORDER_MEMBER];
};

// 보낸 사람
kakaoGenerator.forBlock['kakao_msg_sender'] = function(block, generator) {
    return ['msg.author.name', generator.ORDER_MEMBER];
};

// 단체방 여부
kakaoGenerator.forBlock['kakao_msg_is_group'] = function(block, generator) {
    return ['msg.isGroupChat', generator.ORDER_MEMBER];
};

// 특정 방에 메시지 보내기
kakaoGenerator.forBlock['kakao_bot_send'] = function(block, generator) {
    let room = generator.valueToCode(block, 'ROOM', generator.ORDER_ATOMIC) || '""';
    let message = generator.valueToCode(block, 'MESSAGE', generator.ORDER_ATOMIC) || '""';
    return `bot.send(${room}, ${message});\n`;
};

// 답장 가능 여부
kakaoGenerator.forBlock['kakao_can_reply'] = function(block, generator) {
    let room = generator.valueToCode(block, 'ROOM', generator.ORDER_ATOMIC) || '""';
    return [`bot.canReply(${room})`, generator.ORDER_FUNCTION_CALL];
};

// 파일 읽기
kakaoGenerator.forBlock['kakao_file_read'] = function(block, generator) {
    let path = generator.valueToCode(block, 'PATH', generator.ORDER_ATOMIC) || '""';
    return [`FileStream.read(${path})`, generator.ORDER_FUNCTION_CALL];
};

// 파일 쓰기
kakaoGenerator.forBlock['kakao_file_write'] = function(block, generator) {
    let path = generator.valueToCode(block, 'PATH', generator.ORDER_ATOMIC) || '""';
    let data = generator.valueToCode(block, 'DATA', generator.ORDER_ATOMIC) || '""';
    return `FileStream.write(${path}, ${data});\n`;
};

// 파일 존재 여부 확인
kakaoGenerator.forBlock['kakao_file_exists'] = function(block, generator) {
    let path = generator.valueToCode(block, 'PATH', generator.ORDER_ATOMIC) || '""';
    return [`FileStream.exists(${path})`, generator.ORDER_FUNCTION_CALL];
};

// 파일 추가 쓰기
kakaoGenerator.forBlock['kakao_file_append'] = function(block, generator) {
    let path = generator.valueToCode(block, 'PATH', generator.ORDER_ATOMIC) || '""';
    let data = generator.valueToCode(block, 'DATA', generator.ORDER_ATOMIC) || '""';
    return `FileStream.append(${path}, ${data});\n`;
};

// 파일 삭제
kakaoGenerator.forBlock['kakao_file_remove'] = function(block, generator) {
    let path = generator.valueToCode(block, 'PATH', generator.ORDER_ATOMIC) || '""';
    return `FileStream.remove(${path});\n`;
};

// 폴더 생성
kakaoGenerator.forBlock['kakao_file_mkdir'] = function(block, generator) {
    let path = generator.valueToCode(block, 'PATH', generator.ORDER_ATOMIC) || '""';
    return `FileStream.makeDir(${path});\n`;
};

// 봇 경로 가져오기
kakaoGenerator.forBlock['kakao_file_bot_path'] = function(block, generator) {
    return ['Bot.getScriptPath()', generator.ORDER_FUNCTION_CALL];
};

// 로그 - Info
kakaoGenerator.forBlock['kakao_log_info'] = function(block, generator) {
    let message = generator.valueToCode(block, 'MESSAGE', generator.ORDER_ATOMIC) || '""';
    return `Log.i(${message});\n`;
};

// 로그 - Error
kakaoGenerator.forBlock['kakao_log_error'] = function(block, generator) {
    let message = generator.valueToCode(block, 'MESSAGE', generator.ORDER_ATOMIC) || '""';
    return `Log.e(${message});\n`;
};

// 로그 - Debug
kakaoGenerator.forBlock['kakao_log_debug'] = function(block, generator) {
    let message = generator.valueToCode(block, 'MESSAGE', generator.ORDER_ATOMIC) || '""';
    return `Log.d(${message});\n`;
};

// 채널 ID
kakaoGenerator.forBlock['kakao_msg_channel_id'] = function(block, generator) {
    return ['msg.channelId', generator.ORDER_MEMBER];
};

// 텍스트 이어붙이기 (Blockly 기본 text_join 오버라이드)
kakaoGenerator.forBlock['text_join'] = function(block, generator) {
    let code = [];
    for (let i = 0; i < block.itemCount_; i++) {
        let itemCode = generator.valueToCode(block, 'ADD' + i, generator.ORDER_ATOMIC);
        if (itemCode) {
            code.push(itemCode);
        }
    }
    if (code.length === 0) {
        return ['""', generator.ORDER_ATOMIC];
    }
    return [code.join(' + '), generator.ORDER_ADDITION];
};

// 텍스트 분리 후 n번째 단어 가져오기
kakaoGenerator.forBlock['kakao_text_split_get'] = function(block, generator) {
    let text = generator.valueToCode(block, 'TEXT', generator.ORDER_ATOMIC) || '""';
    let delimiter = block.getFieldValue('DELIMITER');
    let index = generator.valueToCode(block, 'INDEX', generator.ORDER_ATOMIC) || '1';
    // 1부터 시작하므로 -1 해줌
    return [`${text}.split("${delimiter}")[${index} - 1]`, generator.ORDER_MEMBER];
};

// 텍스트 이어붙이기
kakaoGenerator.forBlock['kakao_text_concat'] = function(block, generator) {
    let text1 = generator.valueToCode(block, 'TEXT1', generator.ORDER_ATOMIC) || '""';
    let text2 = generator.valueToCode(block, 'TEXT2', generator.ORDER_ATOMIC) || '""';
    return [`${text1} + ${text2}`, generator.ORDER_ADDITION];
};

// 텍스트 포함 여부 확인
kakaoGenerator.forBlock['kakao_text_includes'] = function(block, generator) {
    let text = generator.valueToCode(block, 'TEXT', generator.ORDER_ATOMIC) || '""';
    let search = generator.valueToCode(block, 'SEARCH', generator.ORDER_ATOMIC) || '""';
    return [`${text}.includes(${search})`, generator.ORDER_FUNCTION_CALL];
};

// 텍스트 시작 여부 확인
kakaoGenerator.forBlock['kakao_text_startswith'] = function(block, generator) {
    let text = generator.valueToCode(block, 'TEXT', generator.ORDER_ATOMIC) || '""';
    let search = generator.valueToCode(block, 'SEARCH', generator.ORDER_ATOMIC) || '""';
    return [`${text}.startsWith(${search})`, generator.ORDER_FUNCTION_CALL];
};

// 텍스트 끝 여부 확인
kakaoGenerator.forBlock['kakao_text_endswith'] = function(block, generator) {
    let text = generator.valueToCode(block, 'TEXT', generator.ORDER_ATOMIC) || '""';
    let search = generator.valueToCode(block, 'SEARCH', generator.ORDER_ATOMIC) || '""';
    return [`${text}.endsWith(${search})`, generator.ORDER_FUNCTION_CALL];
};

// 텍스트 치환
kakaoGenerator.forBlock['kakao_text_replace'] = function(block, generator) {
    let text = generator.valueToCode(block, 'TEXT', generator.ORDER_ATOMIC) || '""';
    let from = generator.valueToCode(block, 'FROM', generator.ORDER_ATOMIC) || '""';
    let to = generator.valueToCode(block, 'TO', generator.ORDER_ATOMIC) || '""';
    return [`${text}.replaceAll(${from}, ${to})`, generator.ORDER_FUNCTION_CALL];
};

// 리스트에 값이 포함되어 있는지 확인
kakaoGenerator.forBlock['kakao_list_contains'] = function(block, generator) {
    let list = generator.valueToCode(block, 'LIST', generator.ORDER_ATOMIC) || '[]';
    let item = generator.valueToCode(block, 'ITEM', generator.ORDER_ATOMIC) || '""';
    return [`${list}.includes(${item})`, generator.ORDER_FUNCTION_CALL];
};

// ===== 오브젝트 생성기 =====

// 빈 오브젝트 생성
kakaoGenerator.forBlock['kakao_object_create_empty'] = function(block, generator) {
    return ['{}', generator.ORDER_ATOMIC];
};

// 오브젝트 생성 (키-값 쌍)
kakaoGenerator.forBlock['kakao_object_create'] = function(block, generator) {
    let key = generator.valueToCode(block, 'KEY1', generator.ORDER_ATOMIC) || '""';
    let value = generator.valueToCode(block, 'VALUE1', generator.ORDER_ATOMIC) || '""';
    // 키에서 따옴표 제거하고 다시 감싸기
    let cleanKey = key.replace(/^["']|["']$/g, '');
    return [`{ "${cleanKey}": ${value} }`, generator.ORDER_ATOMIC];
};

// 오브젝트에서 값 가져오기
kakaoGenerator.forBlock['kakao_object_get'] = function(block, generator) {
    let obj = generator.valueToCode(block, 'OBJECT', generator.ORDER_ATOMIC) || '{}';
    let key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '""';
    return [`${obj}[${key}]`, generator.ORDER_MEMBER];
};

// 오브젝트에 값 설정하기
kakaoGenerator.forBlock['kakao_object_set'] = function(block, generator) {
    let obj = generator.valueToCode(block, 'OBJECT', generator.ORDER_ATOMIC) || '{}';
    let key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '""';
    let value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC) || '""';
    return `${obj}[${key}] = ${value};\n`;
};

// 오브젝트에 키가 존재하는지 확인
kakaoGenerator.forBlock['kakao_object_has_key'] = function(block, generator) {
    let obj = generator.valueToCode(block, 'OBJECT', generator.ORDER_ATOMIC) || '{}';
    let key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '""';
    return [`${obj}.hasOwnProperty(${key})`, generator.ORDER_FUNCTION_CALL];
};

// 오브젝트의 모든 키 가져오기
kakaoGenerator.forBlock['kakao_object_keys'] = function(block, generator) {
    let obj = generator.valueToCode(block, 'OBJECT', generator.ORDER_ATOMIC) || '{}';
    return [`Object.keys(${obj})`, generator.ORDER_FUNCTION_CALL];
};

// 오브젝트의 모든 값 가져오기
kakaoGenerator.forBlock['kakao_object_values'] = function(block, generator) {
    let obj = generator.valueToCode(block, 'OBJECT', generator.ORDER_ATOMIC) || '{}';
    return [`Object.values(${obj})`, generator.ORDER_FUNCTION_CALL];
};

// 오브젝트에서 키 삭제하기
kakaoGenerator.forBlock['kakao_object_delete'] = function(block, generator) {
    let obj = generator.valueToCode(block, 'OBJECT', generator.ORDER_ATOMIC) || '{}';
    let key = generator.valueToCode(block, 'KEY', generator.ORDER_ATOMIC) || '""';
    return `delete ${obj}[${key}];\n`;
};

// JSON 문자열을 오브젝트로 변환
kakaoGenerator.forBlock['kakao_json_parse'] = function(block, generator) {
    let json = generator.valueToCode(block, 'JSON', generator.ORDER_ATOMIC) || '"{}"';
    return [`JSON.parse(${json})`, generator.ORDER_FUNCTION_CALL];
};

// 오브젝트를 JSON 문자열로 변환
kakaoGenerator.forBlock['kakao_json_stringify'] = function(block, generator) {
    let obj = generator.valueToCode(block, 'OBJECT', generator.ORDER_ATOMIC) || '{}';
    return [`JSON.stringify(${obj})`, generator.ORDER_FUNCTION_CALL];
};

// ===== 날짜/시간 생성기 =====

// 현재 날짜/시간 객체
kakaoGenerator.forBlock['kakao_date_now'] = function(block, generator) {
    return ['new Date()', generator.ORDER_NEW];
};

// 현재 타임스탬프
kakaoGenerator.forBlock['kakao_date_timestamp'] = function(block, generator) {
    return ['Date.now()', generator.ORDER_FUNCTION_CALL];
};

// 날짜에서 특정 값 가져오기
kakaoGenerator.forBlock['kakao_date_get'] = function(block, generator) {
    let date = generator.valueToCode(block, 'DATE', generator.ORDER_ATOMIC) || 'new Date()';
    let type = block.getFieldValue('TYPE');
    let code;
    switch(type) {
        case 'YEAR': code = `${date}.getFullYear()`; break;
        case 'MONTH': code = `(${date}.getMonth() + 1)`; break;
        case 'DATE': code = `${date}.getDate()`; break;
        case 'HOURS': code = `${date}.getHours()`; break;
        case 'MINUTES': code = `${date}.getMinutes()`; break;
        case 'SECONDS': code = `${date}.getSeconds()`; break;
        case 'DAY': code = `${date}.getDay()`; break;
        default: code = `${date}.getTime()`;
    }
    return [code, generator.ORDER_FUNCTION_CALL];
};

// 포맷된 날짜 문자열
kakaoGenerator.forBlock['kakao_date_format'] = function(block, generator) {
    let date = generator.valueToCode(block, 'DATE', generator.ORDER_ATOMIC) || 'new Date()';
    let format = block.getFieldValue('FORMAT');
    // 헬퍼 함수를 사용하여 포맷팅
    let code = `(function(d) {
    var yyyy = d.getFullYear();
    var MM = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    var HH = String(d.getHours()).padStart(2, '0');
    var mm = String(d.getMinutes()).padStart(2, '0');
    var ss = String(d.getSeconds()).padStart(2, '0');
    return "${format}".replace("YYYY", yyyy).replace("MM", MM).replace("DD", dd).replace("HH", HH).replace("mm", mm).replace("ss", ss);
})(${date})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};

// 현재 년도
kakaoGenerator.forBlock['kakao_date_current_year'] = function(block, generator) {
    return ['new Date().getFullYear()', generator.ORDER_FUNCTION_CALL];
};

// 현재 월
kakaoGenerator.forBlock['kakao_date_current_month'] = function(block, generator) {
    return ['(new Date().getMonth() + 1)', generator.ORDER_FUNCTION_CALL];
};

// 현재 일
kakaoGenerator.forBlock['kakao_date_current_day'] = function(block, generator) {
    return ['new Date().getDate()', generator.ORDER_FUNCTION_CALL];
};

// 현재 시
kakaoGenerator.forBlock['kakao_date_current_hours'] = function(block, generator) {
    return ['new Date().getHours()', generator.ORDER_FUNCTION_CALL];
};

// 현재 분
kakaoGenerator.forBlock['kakao_date_current_minutes'] = function(block, generator) {
    return ['new Date().getMinutes()', generator.ORDER_FUNCTION_CALL];
};

// 현재 초
kakaoGenerator.forBlock['kakao_date_current_seconds'] = function(block, generator) {
    return ['new Date().getSeconds()', generator.ORDER_FUNCTION_CALL];
};

// 현재 요일
kakaoGenerator.forBlock['kakao_date_current_weekday'] = function(block, generator) {
    return ['["일", "월", "화", "수", "목", "금", "토"][new Date().getDay()]', generator.ORDER_MEMBER];
};

// 날짜 생성
kakaoGenerator.forBlock['kakao_date_create'] = function(block, generator) {
    let year = generator.valueToCode(block, 'YEAR', generator.ORDER_ATOMIC) || '2024';
    let month = generator.valueToCode(block, 'MONTH', generator.ORDER_ATOMIC) || '1';
    let day = generator.valueToCode(block, 'DAY', generator.ORDER_ATOMIC) || '1';
    return [`new Date(${year}, ${month} - 1, ${day})`, generator.ORDER_NEW];
};

// 날짜 비교
kakaoGenerator.forBlock['kakao_date_compare'] = function(block, generator) {
    let date1 = generator.valueToCode(block, 'DATE1', generator.ORDER_ATOMIC) || 'new Date()';
    let date2 = generator.valueToCode(block, 'DATE2', generator.ORDER_ATOMIC) || 'new Date()';
    let op = block.getFieldValue('OP');
    let code;
    switch(op) {
        case 'BEFORE': code = `(${date1}.getTime() < ${date2}.getTime())`; break;
        case 'AFTER': code = `(${date1}.getTime() > ${date2}.getTime())`; break;
        case 'EQUAL': code = `(${date1}.getTime() === ${date2}.getTime())`; break;
        default: code = 'false';
    }
    return [code, generator.ORDER_RELATIONAL];
};

// ===== 특수 문자 생성기 =====

// 엔터(줄바꿈) 문자
kakaoGenerator.forBlock['kakao_char_newline'] = function(block, generator) {
    return ['"\\n"', generator.ORDER_ATOMIC];
};

// 더보기 문자
kakaoGenerator.forBlock['kakao_char_more'] = function(block, generator) {
    return ['"\\u200b".repeat(500)', generator.ORDER_FUNCTION_CALL];
};

// 탭 문자
kakaoGenerator.forBlock['kakao_char_tab'] = function(block, generator) {
    return ['"\\t"', generator.ORDER_ATOMIC];
};

