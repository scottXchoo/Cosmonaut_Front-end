import React, { useEffect, useRef, useState } from "react";
import { AnsTabAble } from "../../../../../../components/CodeEditor/AnsTabAble";
import EditorAnsHeader from "../../../../../../components/CodeEditor/EditorAnsHeader";
import EditorCode from "../../../../../../components/CodeEditor/EditorCode";
import EditorCodeHeader from "../../../../../../components/CodeEditor/EditorCodeHeader";
import EditorDesc from "../../../../../../components/CodeEditor/EditorDesc";
import EditorResult from "../../../../../../components/CodeEditor/EditorResult";
import { MobileEnv } from "../../../../../../components/CodeEditor/MobileEnv";
import { ProblemTab } from "../../../../../../components/CodeEditor/ProblemTab";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import Hint from "../../../../../../components/Contents/Hint";
import HintButton from "../../../../../../components/Contents/HintButton";
import ListStyle from "../../../../../../components/Contents/ListStyle";
import ProblemSection from "../../../../../../components/Contents/ProblemSection";
import Question from "../../../../../../components/Contents/Question";

const L2C6U2S3Code = ({ read, ex, ans, difSuccess }) => {
  const [hide, setHide] = useState(true);
  const [tab, setTab] = useState("problem");
  const editorRef = useRef(null);
  const [files, setFiles] = useState({});

  let index = "L2C6U2S3";
  let initCode;
  if (sessionStorage.getItem(index)) {
    initCode = sessionStorage.getItem(index);
  } else {
    initCode = "";
  }
  const [code, setCode] = useState(initCode);

  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
    sessionStorage.setItem(index, code);
  }, [code, files, tab, index]);

  return (
    <>
      <EditorDesc>
        <ProblemSection>
          <Question>Question</Question>
          <BasicP>
            Let's complete the logic of <CodeBlock>deduct_allowance</CodeBlock>.
          </BasicP>
          <BasicP>
            In <CodeBlock>deduct_allowance</CodeBlock>,
          </BasicP>
          <ListStyle>
            <li>Make sure that the expires are sufficient.</li>
            <li>
              If sufficient, update <CodeBlock>allowance</CodeBlock> to a value
              that subtracts <CodeBlock>amount</CodeBlock>
              from the current value.
            </li>
          </ListStyle>
        </ProblemSection>

        <HintButton onClick={async () => setHide(!hide)}>
          <Hint hide={hide} />
          {hide ? null : (
            <>
              <BasicP>
                You can refer to the <CodeBlock>DecreaseAllowance</CodeBlock>{" "}
                that we discussed above. However, if{" "}
                <CodeBlock>amount</CodeBlock> is greater than the remaining
                allowance, it would be an abnormal situation here.
              </BasicP>
            </>
          )}
        </HintButton>
      </EditorDesc>

      {/* Code Editor */}

      <MobileEnv />
      <EditorCode>
        <div class="mb-1 px-4">
          {difSuccess ? (
            <EditorAnsHeader>
              <AnsTabAble
                disabled={tab === "answer"}
                onClick={async (e) => {
                  e.preventDefault();
                  setTab("answer");
                }}
              />
            </EditorAnsHeader>
          ) : (
            <EditorCodeHeader>
              <ProblemTab
                disabled={tab === "problem"}
                onClick={async (e) => {
                  e.preventDefault();
                  setTab("problem");
                }}
              >
                Problem
              </ProblemTab>
            </EditorCodeHeader>
          )}
          <div class="mx-auto mb-1">
            {/* Mobile Version */}
            <div class="md:hidden block w-full bg-black py-4 px-5 h-quiz">
              <h2 class="text-xl font-extrabold text-blue-500">
                Mobile Environment not supported
              </h2>
            </div>

            {/* Editor */}
            <EditorResult
              read={read}
              defaultLanguage="rust"
              difSuccess={difSuccess}
              exCode={difSuccess ? ans : ex}
              path={difSuccess ? "answer" : tab}
              index={index}
              onChange={async (e) => await setCode(e)}
              onMount={(editor) => (editorRef.current = editor)}
              files={files}
            />
          </div>
        </div>
      </EditorCode>
    </>
  );
};

export default L2C6U2S3Code;
