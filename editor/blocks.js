/**
 * 카카오톡 봇 블록 코딩 에디터 - 커스텀 블록 정의
 * MessengerBot R API2 기반
 */

// 봇 초기화 블록
Blockly.Blocks['kakao_bot_init'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🤖 봇 시작");
        this.appendStatementInput("HANDLERS")
            .setCheck(null)
            .appendField("실행할 내용");
        this.setColour(120);
        this.setTooltip("봇을 시작하고 이벤트를 등록합니다.");
        this.setHelpUrl("");
    }
};

// 명령어 프리픽스 설정
Blockly.Blocks['kakao_set_prefix'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("⚙️ 명령어 접두사를")
            .appendField(new Blockly.FieldTextInput("!"), "PREFIX")
            .appendField("(으)로 설정");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("명령어 앞에 붙는 접두사를 설정합니다. (예: !도움말)");
    }
};

// 메시지 이벤트 핸들러 (독립 시작 블록)
Blockly.Blocks['kakao_on_message'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("📨 메시지를 받았을 때");
        this.appendStatementInput("DO")
            .setCheck(null);
        this.setColour(45);
        this.setTooltip("카카오톡에서 메시지를 받았을 때 실행됩니다. (매개변수: msg)");
        this.setDeletable(true);
        this.setMovable(true);
    }
};

// 명령어 이벤트 핸들러 (독립 시작 블록)
Blockly.Blocks['kakao_on_command'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("⚡ 명령어")
            .appendField(new Blockly.FieldTextInput("도움말"), "COMMAND")
            .appendField("을(를) 받았을 때");
        this.appendStatementInput("DO")
            .setCheck(null);
        this.setColour(45);
        this.setTooltip("특정 명령어를 받았을 때 실행됩니다. (매개변수: msg)");
        this.setDeletable(true);
        this.setMovable(true);
    }
};

// 시작 시 실행 (독립 시작 블록)
Blockly.Blocks['kakao_on_start'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🚀 봇이 시작될 때");
        this.appendStatementInput("DO")
            .setCheck(null);
        this.setColour(45);
        this.setTooltip("봇이 시작될 때 한 번 실행됩니다.");
        this.setDeletable(true);
        this.setMovable(true);
    }
};

// 봇이 컴파일될 때 (독립 시작 블록)
Blockly.Blocks['kakao_on_compile'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🔧 스크립트가 컴파일될 때");
        this.appendStatementInput("DO")
            .setCheck(null);
        this.setColour(45);
        this.setTooltip("스크립트가 컴파일될 때 실행됩니다.");
        this.setDeletable(true);
        this.setMovable(true);
    }
};

// 메시지 답장
Blockly.Blocks['kakao_reply'] = {
    init: function() {
        this.appendValueInput("MESSAGE")
            .setCheck(null)
            .appendField("💬 답장하기:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("받은 메시지에 답장합니다.");
    }
};

// 텍스트로 답장
Blockly.Blocks['kakao_reply_text'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("💬 답장하기:")
            .appendField(new Blockly.FieldTextInput("안녕하세요!"), "TEXT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("입력한 텍스트로 답장합니다.");
    }
};

// 메시지 정보 가져오기 (통합 블록)
Blockly.Blocks['kakao_msg_info'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("📋 msg의")
            .appendField(new Blockly.FieldDropdown([
                ["📝 메시지 내용", "content"],
                ["🏠 채팅방 이름", "room"],
                ["👤 보낸 사람 이름", "author.name"],
                ["🖼️ 보낸 사람 프로필", "author.avatar.getBase64()"],
                ["👥 단체방 여부", "isGroupChat"],
                ["🔑 채팅방 ID", "channelId"],
                ["📦 패키지 이름", "packageName"],
                ["🔔 알림 ID", "notificationId"]
            ]), "PROPERTY");
        this.setOutput(true, null);
        this.setColour(210);
        this.setTooltip("메시지의 다양한 정보를 가져옵니다.");
    }
};

// 메시지 내용 가져오기
Blockly.Blocks['kakao_msg_content'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("📝 받은 메시지");
        this.setOutput(true, "String");
        this.setColour(210);
        this.setTooltip("받은 메시지의 내용입니다. (msg.content)");
    }
};

// 방 이름 가져오기
Blockly.Blocks['kakao_msg_room'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🏠 채팅방 이름");
        this.setOutput(true, "String");
        this.setColour(210);
        this.setTooltip("메시지가 온 채팅방의 이름입니다. (msg.room)");
    }
};

// 보낸 사람 이름 가져오기
Blockly.Blocks['kakao_msg_sender'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("👤 보낸 사람 이름");
        this.setOutput(true, "String");
        this.setColour(210);
        this.setTooltip("메시지를 보낸 사람의 이름입니다. (msg.author.name)");
    }
};

// 단체방 여부
Blockly.Blocks['kakao_msg_is_group'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("👥 단체 채팅방인가?");
        this.setOutput(true, "Boolean");
        this.setColour(210);
        this.setTooltip("현재 채팅방이 단체 채팅방인지 확인합니다. (msg.isGroupChat)");
    }
};

// 채널 ID 가져오기
Blockly.Blocks['kakao_msg_channel_id'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🔑 채팅방 ID");
        this.setOutput(true, "String");
        this.setColour(210);
        this.setTooltip("채팅방의 고유 ID입니다. (msg.channelId)");
    }
};

// 특정 방에 메시지 보내기
Blockly.Blocks['kakao_bot_send'] = {
    init: function() {
        this.appendValueInput("ROOM")
            .setCheck("String")
            .appendField("📤");
        this.appendValueInput("MESSAGE")
            .setCheck(null)
            .appendField("채팅방에 메시지 보내기:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("특정 채팅방에 메시지를 보냅니다.");
    }
};

// 답장 가능 여부 확인
Blockly.Blocks['kakao_can_reply'] = {
    init: function() {
        this.appendValueInput("ROOM")
            .setCheck("String")
            .appendField("📬");
        this.appendDummyInput()
            .appendField("채팅방에 답장 가능한가?");
        this.setOutput(true, "Boolean");
        this.setColour(210);
        this.setTooltip("해당 채팅방에 답장이 가능한지 확인합니다.");
    }
};

// 파일 읽기
Blockly.Blocks['kakao_file_read'] = {
    init: function() {
        this.appendValueInput("PATH")
            .setCheck("String")
            .appendField("📖 파일에서 읽기:");
        this.setOutput(true, "String");
        this.setColour(0);
        this.setTooltip("지정한 경로의 파일 내용을 읽어옵니다.");
    }
};

// 파일 쓰기
Blockly.Blocks['kakao_file_write'] = {
    init: function() {
        this.appendValueInput("PATH")
            .setCheck("String")
            .appendField("📝");
        this.appendValueInput("DATA")
            .setCheck(null)
            .appendField("파일에 저장하기:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("지정한 경로의 파일에 데이터를 저장합니다.");
    }
};

// 파일 존재 여부 확인
Blockly.Blocks['kakao_file_exists'] = {
    init: function() {
        this.appendValueInput("PATH")
            .setCheck("String")
            .appendField("📂 파일이 존재하는가?");
        this.setOutput(true, "Boolean");
        this.setColour(0);
        this.setTooltip("지정한 경로에 파일이 존재하는지 확인합니다.");
    }
};

// 파일 추가 쓰기 (append)
Blockly.Blocks['kakao_file_append'] = {
    init: function() {
        this.appendValueInput("PATH")
            .setCheck("String")
            .appendField("📝");
        this.appendValueInput("DATA")
            .setCheck(null)
            .appendField("파일에 추가하기:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("지정한 경로의 파일 끝에 데이터를 추가합니다.");
    }
};

// 파일 삭제
Blockly.Blocks['kakao_file_remove'] = {
    init: function() {
        this.appendValueInput("PATH")
            .setCheck("String")
            .appendField("🗑️ 파일 삭제:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("지정한 경로의 파일을 삭제합니다.");
    }
};

// 폴더 생성
Blockly.Blocks['kakao_file_mkdir'] = {
    init: function() {
        this.appendValueInput("PATH")
            .setCheck("String")
            .appendField("📁 폴더 생성:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("지정한 경로에 폴더를 생성합니다.");
    }
};

// 봇 경로 가져오기
Blockly.Blocks['kakao_file_bot_path'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("📍 봇 저장 경로");
        this.setOutput(true, "String");
        this.setColour(0);
        this.setTooltip("현재 봇의 저장 경로를 가져옵니다.");
    }
};

// 로그 - Info
Blockly.Blocks['kakao_log_info'] = {
    init: function() {
        this.appendValueInput("MESSAGE")
            .setCheck(null)
            .appendField("ℹ️ 정보 로그 출력:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("정보 로그를 출력합니다.");
    }
};

// 로그 - Error
Blockly.Blocks['kakao_log_error'] = {
    init: function() {
        this.appendValueInput("MESSAGE")
            .setCheck(null)
            .appendField("❌ 오류 로그 출력:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("오류 로그를 출력합니다.");
    }
};

// 로그 - Debug
Blockly.Blocks['kakao_log_debug'] = {
    init: function() {
        this.appendValueInput("MESSAGE")
            .setCheck(null)
            .appendField("🔍 디버그 로그 출력:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("디버그 로그를 출력합니다.");
    }
};

// 텍스트 분리 후 n번째 단어 가져오기
Blockly.Blocks['kakao_text_split_get'] = {
    init: function() {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("✂️");
        this.appendDummyInput()
            .appendField("을(를)")
            .appendField(new Blockly.FieldTextInput(" "), "DELIMITER")
            .appendField("(으)로 나눈 후");
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField("");
        this.appendDummyInput()
            .appendField("번째 단어");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("텍스트를 구분자로 나눈 후 n번째 단어를 가져옵니다. (1부터 시작)");
    }
};

// 텍스트 이어붙이기
Blockly.Blocks['kakao_text_concat'] = {
    init: function() {
        this.appendValueInput("TEXT1")
            .setCheck("String")
            .appendField("🔗");
        this.appendValueInput("TEXT2")
            .setCheck("String")
            .appendField("+");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("두 텍스트를 이어붙입니다.");
    }
};

// 텍스트 포함 여부 확인
Blockly.Blocks['kakao_text_includes'] = {
    init: function() {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("📝");
        this.appendValueInput("SEARCH")
            .setCheck("String")
            .appendField("에");
        this.appendDummyInput()
            .appendField("이(가) 포함되어 있는가?");
        this.setOutput(true, "Boolean");
        this.setColour(160);
        this.setTooltip("텍스트에 특정 문자열이 포함되어 있는지 확인합니다.");
    }
};

// 텍스트 시작 여부 확인
Blockly.Blocks['kakao_text_startswith'] = {
    init: function() {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("📝");
        this.appendValueInput("SEARCH")
            .setCheck("String")
            .appendField("이(가)");
        this.appendDummyInput()
            .appendField("(으)로 시작하는가?");
        this.setOutput(true, "Boolean");
        this.setColour(160);
        this.setTooltip("텍스트가 특정 문자열로 시작하는지 확인합니다.");
    }
};

// 텍스트 끝 여부 확인
Blockly.Blocks['kakao_text_endswith'] = {
    init: function() {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("📝");
        this.appendValueInput("SEARCH")
            .setCheck("String")
            .appendField("이(가)");
        this.appendDummyInput()
            .appendField("(으)로 끝나는가?");
        this.setOutput(true, "Boolean");
        this.setColour(160);
        this.setTooltip("텍스트가 특정 문자열로 끝나는지 확인합니다.");
    }
};

// 텍스트 치환
Blockly.Blocks['kakao_text_replace'] = {
    init: function() {
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("🔄");
        this.appendValueInput("FROM")
            .setCheck("String")
            .appendField("에서");
        this.appendValueInput("TO")
            .setCheck("String")
            .appendField("을(를)");
        this.appendDummyInput()
            .appendField("(으)로 바꾸기");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("텍스트에서 특정 문자열을 다른 문자열로 바꿉니다.");
    }
};

// 리스트에 값이 포함되어 있는지 확인
Blockly.Blocks['kakao_list_contains'] = {
    init: function() {
        this.appendValueInput("LIST")
            .setCheck("Array")
            .appendField("📦");
        this.appendValueInput("ITEM")
            .setCheck(null)
            .appendField("에");
        this.appendDummyInput()
            .appendField("이(가) 포함되어 있는가?");
        this.setOutput(true, "Boolean");
        this.setColour(260);
        this.setTooltip("리스트에 특정 값이 포함되어 있는지 확인합니다.");
    }
};

// ===== 오브젝트 블록 =====

// 빈 오브젝트 생성
Blockly.Blocks['kakao_object_create_empty'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🗃️ 빈 오브젝트 생성");
        this.setOutput(true, "Object");
        this.setColour(230);
        this.setTooltip("빈 오브젝트를 생성합니다.");
    }
};

// 오브젝트 생성 (키-값 쌍)
Blockly.Blocks['kakao_object_create'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🗃️ 오브젝트 생성");
        this.appendValueInput("KEY1")
            .setCheck("String")
            .appendField("키:");
        this.appendValueInput("VALUE1")
            .setCheck(null)
            .appendField("값:");
        this.setOutput(true, "Object");
        this.setColour(230);
        this.setTooltip("키-값 쌍으로 오브젝트를 생성합니다.");
    }
};

// 오브젝트에서 값 가져오기
Blockly.Blocks['kakao_object_get'] = {
    init: function() {
        this.appendValueInput("OBJECT")
            .setCheck("Object")
            .appendField("🗃️");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("에서");
        this.appendDummyInput()
            .appendField("값 가져오기");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("오브젝트에서 키에 해당하는 값을 가져옵니다.");
    }
};

// 오브젝트에 값 설정하기
Blockly.Blocks['kakao_object_set'] = {
    init: function() {
        this.appendValueInput("OBJECT")
            .setCheck("Object")
            .appendField("🗃️");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("에");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("키로");
        this.appendDummyInput()
            .appendField("값 설정하기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("오브젝트에 키-값 쌍을 설정합니다.");
    }
};

// 오브젝트에 키가 존재하는지 확인
Blockly.Blocks['kakao_object_has_key'] = {
    init: function() {
        this.appendValueInput("OBJECT")
            .setCheck("Object")
            .appendField("🗃️");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("에");
        this.appendDummyInput()
            .appendField("키가 존재하는가?");
        this.setOutput(true, "Boolean");
        this.setColour(230);
        this.setTooltip("오브젝트에 특정 키가 존재하는지 확인합니다.");
    }
};

// 오브젝트의 모든 키 가져오기
Blockly.Blocks['kakao_object_keys'] = {
    init: function() {
        this.appendValueInput("OBJECT")
            .setCheck("Object")
            .appendField("🗃️");
        this.appendDummyInput()
            .appendField("의 모든 키");
        this.setOutput(true, "Array");
        this.setColour(230);
        this.setTooltip("오브젝트의 모든 키를 리스트로 가져옵니다.");
    }
};

// 오브젝트의 모든 값 가져오기
Blockly.Blocks['kakao_object_values'] = {
    init: function() {
        this.appendValueInput("OBJECT")
            .setCheck("Object")
            .appendField("🗃️");
        this.appendDummyInput()
            .appendField("의 모든 값");
        this.setOutput(true, "Array");
        this.setColour(230);
        this.setTooltip("오브젝트의 모든 값을 리스트로 가져옵니다.");
    }
};

// 오브젝트에서 키 삭제하기
Blockly.Blocks['kakao_object_delete'] = {
    init: function() {
        this.appendValueInput("OBJECT")
            .setCheck("Object")
            .appendField("🗃️");
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("에서");
        this.appendDummyInput()
            .appendField("키 삭제하기");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("오브젝트에서 특정 키를 삭제합니다.");
    }
};

// JSON 문자열을 오브젝트로 변환 (loads)
Blockly.Blocks['kakao_json_parse'] = {
    init: function() {
        this.appendValueInput("JSON")
            .setCheck("String")
            .appendField("📥 텍스트→오브젝트 (loads):");
        this.setOutput(true, "Object");
        this.setColour(230);
        this.setTooltip("JSON 문자열을 오브젝트로 변환합니다. (loads)");
    }
};

// 오브젝트를 JSON 문자열로 변환 (dumps)
Blockly.Blocks['kakao_json_stringify'] = {
    init: function() {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("📤 오브젝트→텍스트 (dumps):");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("오브젝트를 JSON 문자열로 변환합니다. (dumps)");
    }
};

// ===== 날짜/시간 블록 =====

// 현재 날짜/시간 객체
Blockly.Blocks['kakao_date_now'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🕐 현재 날짜/시간");
        this.setOutput(true, "Date");
        this.setColour(20);
        this.setTooltip("현재 날짜와 시간을 가져옵니다.");
    }
};

// 현재 타임스탬프
Blockly.Blocks['kakao_date_timestamp'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🕐 현재 타임스탬프");
        this.setOutput(true, "Number");
        this.setColour(20);
        this.setTooltip("현재 시간을 밀리초 단위 타임스탬프로 가져옵니다.");
    }
};

// 날짜에서 특정 값 가져오기
Blockly.Blocks['kakao_date_get'] = {
    init: function() {
        this.appendValueInput("DATE")
            .setCheck("Date")
            .appendField("🕐");
        this.appendDummyInput()
            .appendField("에서")
            .appendField(new Blockly.FieldDropdown([
                ["년도", "YEAR"],
                ["월", "MONTH"],
                ["일", "DATE"],
                ["시", "HOURS"],
                ["분", "MINUTES"],
                ["초", "SECONDS"],
                ["요일", "DAY"]
            ]), "TYPE")
            .appendField("가져오기");
        this.setOutput(true, "Number");
        this.setColour(20);
        this.setTooltip("날짜에서 특정 값을 가져옵니다.");
    }
};

// 포맷된 날짜 문자열
Blockly.Blocks['kakao_date_format'] = {
    init: function() {
        this.appendValueInput("DATE")
            .setCheck("Date")
            .appendField("🕐");
        this.appendDummyInput()
            .appendField("을(를)")
            .appendField(new Blockly.FieldDropdown([
                ["YYYY-MM-DD", "YYYY-MM-DD"],
                ["YYYY/MM/DD", "YYYY/MM/DD"],
                ["YYYY년 MM월 DD일", "YYYY년 MM월 DD일"],
                ["HH:mm:ss", "HH:mm:ss"],
                ["HH시 mm분 ss초", "HH시 mm분 ss초"],
                ["YYYY-MM-DD HH:mm:ss", "YYYY-MM-DD HH:mm:ss"],
                ["MM/DD HH:mm", "MM/DD HH:mm"]
            ]), "FORMAT")
            .appendField("형식으로");
        this.setOutput(true, "String");
        this.setColour(20);
        this.setTooltip("날짜를 지정한 형식의 문자열로 변환합니다.");
    }
};

// 현재 년도
Blockly.Blocks['kakao_date_current_year'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("📅 현재 년도");
        this.setOutput(true, "Number");
        this.setColour(20);
        this.setTooltip("현재 년도를 가져옵니다.");
    }
};

// 현재 월
Blockly.Blocks['kakao_date_current_month'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("📅 현재 월");
        this.setOutput(true, "Number");
        this.setColour(20);
        this.setTooltip("현재 월을 가져옵니다. (1~12)");
    }
};

// 현재 일
Blockly.Blocks['kakao_date_current_day'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("📅 현재 일");
        this.setOutput(true, "Number");
        this.setColour(20);
        this.setTooltip("현재 일을 가져옵니다.");
    }
};

// 현재 시
Blockly.Blocks['kakao_date_current_hours'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("⏰ 현재 시");
        this.setOutput(true, "Number");
        this.setColour(20);
        this.setTooltip("현재 시간(시)을 가져옵니다. (0~23)");
    }
};

// 현재 분
Blockly.Blocks['kakao_date_current_minutes'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("⏰ 현재 분");
        this.setOutput(true, "Number");
        this.setColour(20);
        this.setTooltip("현재 시간(분)을 가져옵니다. (0~59)");
    }
};

// 현재 초
Blockly.Blocks['kakao_date_current_seconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("⏰ 현재 초");
        this.setOutput(true, "Number");
        this.setColour(20);
        this.setTooltip("현재 시간(초)을 가져옵니다. (0~59)");
    }
};

// 현재 요일
Blockly.Blocks['kakao_date_current_weekday'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("📅 현재 요일");
        this.setOutput(true, "String");
        this.setColour(20);
        this.setTooltip("현재 요일을 가져옵니다. (일, 월, 화, 수, 목, 금, 토)");
    }
};

// 날짜 생성
Blockly.Blocks['kakao_date_create'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("🕐 날짜 생성:");
        this.appendValueInput("YEAR")
            .setCheck("Number")
            .appendField("년");
        this.appendValueInput("MONTH")
            .setCheck("Number")
            .appendField("월");
        this.appendValueInput("DAY")
            .setCheck("Number")
            .appendField("일");
        this.setOutput(true, "Date");
        this.setColour(20);
        this.setTooltip("지정한 년, 월, 일로 날짜를 생성합니다.");
    }
};

// 날짜 비교
Blockly.Blocks['kakao_date_compare'] = {
    init: function() {
        this.appendValueInput("DATE1")
            .setCheck("Date")
            .appendField("🕐");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["이전인가?", "BEFORE"],
                ["이후인가?", "AFTER"],
                ["같은가?", "EQUAL"]
            ]), "OP");
        this.appendValueInput("DATE2")
            .setCheck("Date");
        this.setOutput(true, "Boolean");
        this.setColour(20);
        this.setTooltip("두 날짜를 비교합니다.");
    }
};

// ===== 특수 문자 블록 =====

// 엔터(줄바꿈) 문자
Blockly.Blocks['kakao_char_newline'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("↵ 엔터(줄바꿈)");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("줄바꿈 문자를 반환합니다.");
    }
};

// 더보기 문자 (카카오톡 더보기 트릭)
Blockly.Blocks['kakao_char_more'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("📜 더보기 문자");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("카카오톡에서 '더보기'를 표시하게 하는 보이지 않는 문자입니다.");
    }
};

// 탭 문자
Blockly.Blocks['kakao_char_tab'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("⇥ 탭");
        this.setOutput(true, "String");
        this.setColour(160);
        this.setTooltip("탭 문자를 반환합니다.");
    }
};

