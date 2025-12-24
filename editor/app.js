/**
 * 카카오톡 봇 블록 코딩 에디터 - 메인 애플리케이션
 */

// Blockly 워크스페이스 초기화
let workspace;

// 한국어 번역 수정 (어색한 번역 교정)
document.addEventListener('DOMContentLoaded', function() {
    // 반복문 관련 번역 수정
    Blockly.Msg['CONTROLS_FOR_TITLE'] = '%1 을(를) %2 부터 %3 까지 %4 씩 반복';
    Blockly.Msg['CONTROLS_FOR_TOOLTIP'] = '변수 %1의 값을 시작 값부터 끝 값까지 지정한 간격으로 반복합니다.';
    Blockly.Msg['CONTROLS_FOREACH_TITLE'] = '%2 의 각 항목 %1 에 대해 반복';
    Blockly.Msg['CONTROLS_FOREACH_TOOLTIP'] = '리스트의 각 항목에 대해 변수 %1에 값을 설정하고 명령을 실행합니다.';
    Blockly.Msg['CONTROLS_REPEAT_TITLE'] = '%1 번 반복';
    Blockly.Msg['CONTROLS_WHILEUNTIL_OPERATOR_WHILE'] = '조건이 참인 동안 반복';
    Blockly.Msg['CONTROLS_WHILEUNTIL_OPERATOR_UNTIL'] = '조건이 참이 될 때까지 반복';

    // 리스트 관련 번역 수정
    Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH'] = '리스트 만들기';
    Blockly.Msg['LISTS_CREATE_EMPTY_TITLE'] = '빈 리스트 만들기';
    Blockly.Msg['LISTS_LENGTH_TITLE'] = '%1 의 길이';
    Blockly.Msg['LISTS_ISEMPTY_TITLE'] = '%1 이(가) 비어있는가?';
    Blockly.Msg['LISTS_INLIST'] = '리스트';
    Blockly.Msg['LISTS_GET_INDEX_GET'] = '가져오기';
    Blockly.Msg['LISTS_GET_INDEX_FROM_START'] = '# 번째';
    Blockly.Msg['LISTS_GET_INDEX_FROM_END'] = '뒤에서 # 번째';
    Blockly.Msg['LISTS_GET_INDEX_FIRST'] = '첫 번째';
    Blockly.Msg['LISTS_GET_INDEX_LAST'] = '마지막';
    Blockly.Msg['LISTS_GET_INDEX_RANDOM'] = '무작위';
    Blockly.Msg['LISTS_INDEX_OF_FIRST'] = '처음 위치 찾기';
    Blockly.Msg['LISTS_INDEX_OF_LAST'] = '마지막 위치 찾기';

    // 텍스트 관련 번역 수정
    Blockly.Msg['TEXT_JOIN_TITLE_CREATEWITH'] = '텍스트 만들기';
    Blockly.Msg['TEXT_LENGTH_TITLE'] = '%1 의 길이';
    Blockly.Msg['TEXT_ISEMPTY_TITLE'] = '%1 이(가) 비어있는가?';
    Blockly.Msg['TEXT_INDEXOF_TITLE'] = '%1 에서 %2 %3 찾기';
    Blockly.Msg['TEXT_CHARAT_TITLE'] = '%1 에서 %2 글자 가져오기';
    Blockly.Msg['TEXT_CHANGECASE_OPERATOR_UPPERCASE'] = '대문자로';
    Blockly.Msg['TEXT_CHANGECASE_OPERATOR_LOWERCASE'] = '소문자로';
    Blockly.Msg['TEXT_TRIM_OPERATOR_BOTH'] = '양쪽 공백 제거';
    Blockly.Msg['TEXT_TRIM_OPERATOR_LEFT'] = '왼쪽 공백 제거';
    Blockly.Msg['TEXT_TRIM_OPERATOR_RIGHT'] = '오른쪽 공백 제거';

    // 수학 관련 번역 수정
    Blockly.Msg['MATH_NUMBER_TOOLTIP'] = '숫자입니다.';
    Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_ADD'] = '두 숫자의 합을 반환합니다.';
    Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_MINUS'] = '두 숫자의 차를 반환합니다.';
    Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_MULTIPLY'] = '두 숫자의 곱을 반환합니다.';
    Blockly.Msg['MATH_ARITHMETIC_TOOLTIP_DIVIDE'] = '두 숫자의 나눗셈 결과를 반환합니다.';
    Blockly.Msg['MATH_MODULO_TITLE'] = '%1 ÷ %2 의 나머지';

    // 논리 관련 번역 수정
    Blockly.Msg['LOGIC_COMPARE_TOOLTIP_EQ'] = '두 값이 같으면 참을 반환합니다.';
    Blockly.Msg['LOGIC_COMPARE_TOOLTIP_NEQ'] = '두 값이 다르면 참을 반환합니다.';
    Blockly.Msg['LOGIC_OPERATION_AND'] = '그리고';
    Blockly.Msg['LOGIC_OPERATION_OR'] = '또는';
    Blockly.Msg['LOGIC_NEGATE_TITLE'] = '%1 이(가) 아님';
    Blockly.Msg['LOGIC_BOOLEAN_TRUE'] = '참';
    Blockly.Msg['LOGIC_BOOLEAN_FALSE'] = '거짓';
    Blockly.Msg['LOGIC_NULL'] = '없음';

    // 변수 관련 번역 수정
    Blockly.Msg['VARIABLES_SET'] = '%1 을(를) %2 (으)로 설정';
    Blockly.Msg['VARIABLES_GET_TOOLTIP'] = '변수의 값을 반환합니다.';

    // 워크스페이스 생성
    workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        },
        trashcan: true,
        move: {
            scrollbars: true,
            drag: true,
            wheel: true
        },
        toolboxPosition: 'start',
        horizontalLayout: false,
        // 툴박스 카테고리가 자동으로 닫히지 않도록 설정
        oneBasedIndex: true
    });

    // 툴박스 자동 닫힘 방지
    workspace.getToolbox().setSelectedItem(null);
    workspace.getToolbox().getFlyout().autoClose = false;

    // 한글 변수명 지원을 위한 설정
    Blockly.JavaScript.nameDB_ = new Blockly.Names('');
    Blockly.JavaScript.nameDB_.setVariableMap(workspace.getVariableMap());

    // 변수명을 원본 그대로 사용
    Blockly.JavaScript.nameDB_.getName = function(name, type) {
        // 변수 ID인 경우 실제 변수명 반환
        const variable = workspace.getVariableById(name);
        if (variable) {
            return variable.name;
        }
        return name;
    };

    // 변수 블록 생성기 오버라이드 - 한글 변수명 지원
    Blockly.JavaScript.forBlock['variables_get'] = function(block) {
        const variable = workspace.getVariableById(block.getFieldValue('VAR'));
        const varName = variable ? variable.name : 'undefined';
        return [varName, Blockly.JavaScript.ORDER_ATOMIC];
    };

    Blockly.JavaScript.forBlock['variables_set'] = function(block) {
        const variable = workspace.getVariableById(block.getFieldValue('VAR'));
        const varName = variable ? variable.name : 'undefined';
        const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
        return varName + ' = ' + value + ';\n';
    };

    // 워크스페이스 변경 시 자동 코드 생성 및 자동 저장
    workspace.addChangeListener(function(event) {
        if (event.type !== Blockly.Events.UI) {
            generateCode();
            autoSave();
        }
    });

    // 버튼 이벤트 리스너
    document.getElementById('generateBtn').addEventListener('click', generateCode);
    document.getElementById('copyBtn').addEventListener('click', copyCode);
    document.getElementById('clearBtn').addEventListener('click', clearWorkspace);
    document.getElementById('saveBtn').addEventListener('click', saveWorkspace);
    document.getElementById('loadBtn').addEventListener('click', loadWorkspace);
    document.getElementById('toggleCodeBtn').addEventListener('click', toggleCodeSection);

    // 저장된 블록 불러오기 또는 초기 예제 블록 추가
    if (!loadFromLocalStorage()) {
        addExampleBlocks();
    }
});

// 코드 섹션 접기/펼치기
function toggleCodeSection() {
    let codeSection = document.getElementById('codeSection');
    let mainContent = document.querySelector('.main-content');
    codeSection.classList.toggle('collapsed');
    mainContent.classList.toggle('code-collapsed');

    // Blockly 워크스페이스 크기 재조정
    setTimeout(function() {
        Blockly.svgResize(workspace);
    }, 100);
}

// 코드 생성
function generateCode() {
    try {
        let code = Blockly.JavaScript.workspaceToCode(workspace);

        if (!code.trim()) {
            code = '// 블록을 조합하면 여기에 코드가 생성됩니다.';
        }
        document.getElementById('codeOutput').querySelector('code').textContent = code;
    } catch (e) {
        console.error('코드 생성 오류:', e);
        document.getElementById('codeOutput').querySelector('code').textContent =
            '// 코드 생성 중 오류가 발생했습니다.\n// ' + e.message;
    }
}

// 코드 복사
function copyCode() {
    let code = document.getElementById('codeOutput').querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(function() {
        showNotification('코드가 클립보드에 복사되었습니다!', 'success');
    }).catch(function(err) {
        // 폴백: 구형 브라우저 지원
        let textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('코드가 클립보드에 복사되었습니다!', 'success');
    });
}

// 워크스페이스 초기화
function clearWorkspace() {
    if (confirm('모든 블록을 삭제하시겠습니까?')) {
        workspace.clear();
        localStorage.removeItem('kakao_bot_workspace');
        showNotification('워크스페이스가 초기화되었습니다.', 'info');
    }
}

// 자동 저장 (localStorage) - XML 방식 사용
let autoSaveTimeout = null;
function autoSave() {
    // 디바운스: 연속 변경 시 마지막 변경 후 500ms 뒤에 저장
    if (autoSaveTimeout) {
        clearTimeout(autoSaveTimeout);
    }
    autoSaveTimeout = setTimeout(function() {
        try {
            let xml = Blockly.Xml.workspaceToDom(workspace);
            let xmlText = Blockly.Xml.domToText(xml);
            localStorage.setItem('kakao_bot_workspace', xmlText);
        } catch (e) {
            console.error('자동 저장 오류:', e);
        }
    }, 500);
}

// localStorage에서 불러오기 - XML 방식 사용
function loadFromLocalStorage() {
    try {
        let saved = localStorage.getItem('kakao_bot_workspace');
        if (saved) {
            let xml = Blockly.utils.xml.textToDom(saved);
            Blockly.Xml.domToWorkspace(xml, workspace);
            return true;
        }
    } catch (e) {
        console.error('자동 불러오기 오류:', e);
        localStorage.removeItem('kakao_bot_workspace');
    }
    return false;
}

// 워크스페이스 저장 - XML 방식
function saveWorkspace() {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    let xmlText = Blockly.Xml.domToPrettyText(xml);
    let blob = new Blob([xmlText], {type: 'application/xml'});
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'kakao_bot_blocks.xml';
    a.click();
    URL.revokeObjectURL(url);
    showNotification('블록이 저장되었습니다!', 'success');
}

// 워크스페이스 불러오기 - XML 방식
function loadWorkspace() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xml';
    input.onchange = function(e) {
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                try {
                    let xml = Blockly.utils.xml.textToDom(e.target.result);
                    workspace.clear();
                    Blockly.Xml.domToWorkspace(xml, workspace);
                    showNotification('블록을 불러왔습니다!', 'success');
                } catch (err) {
                    showNotification('파일을 불러오는 중 오류가 발생했습니다.', 'error');
                    console.error(err);
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

// 알림 표시
function showNotification(message, type) {
    let notification = document.createElement('div');
    notification.className = 'notification notification-' + type;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(function() {
        notification.classList.add('show');
    }, 10);
    setTimeout(function() {
        notification.classList.remove('show');
        setTimeout(function() {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// 예제 블록 추가
function addExampleBlocks() {
    // 기본 봇 초기화 블록 추가
    let botInitBlock = workspace.newBlock('kakao_bot_init');
    botInitBlock.initSvg();
    botInitBlock.render();
    botInitBlock.moveBy(50, 50);
}

