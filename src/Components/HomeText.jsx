import { useEffect, useState } from "react"

export default function HomeText() {
    const [MyClasses, _] = useState(['BugReport', 'RunLive', 'CreateProtoType', 'ChangeFrameWork', 'LiveDemo', 'FeedBack', ''])
    const [stRandom, setRandom] = useState(MyClasses[Math.floor(Math.random() * 7)]);

    useEffect(() => {
        setTimeout(() => {
            setRandom(() => MyClasses[Math.floor(Math.random() * 7)]);
        }, 2500);
    });

    return (
        <>
            <div className="WrapperAll">
                <div className="WrapperText">
                    <h1 aria-label="How design systems and frontend teams work together">
                        How
                        <span className="DSWrap">
                            <span className="text">
                                design systems</span>
                            <span className="SquareDS TopSquare" aria-hidden="true">
                            </span>
                            <span className="SquareDS BottomSquare" aria-hidden="true">
                            </span>
                            <span className="SquareDS MiddleSquare" aria-hidden="true">
                            </span>
                        </span>
                        &amp; <span className="Gap_Bef_Aft"><span className="TextFrontEnd">frontend</span>teams</span>
                        work together</h1>
                </div>
                {/* - - -  - - - Moving Background Editor - - - - - - - */}
                <div className="_3DWrrap">
                    <div className={`editorWrapper ${stRandom}`}>
                        <div className="Browser">
                            <div className="BrowserTab"></div>
                        </div>
                        <div className="BrowserAddress"></div>
                        <div className="EditorWrap">
                            <div className="Editor">
                                <div className="EditorFiles"></div>
                                <div className="EditorCode">
                                    <div className="EditorTerminal"></div>
                                </div>
                                <div className="EditorView">
                                    <div className="EditorConsole"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}