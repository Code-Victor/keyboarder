import { useState } from "react";


export default function Keyboard(props) {
    console.log(props.keyPressed);
    const [keyPressed, correct]=props.keyPressed;
    return(
        <div className="keyboard">
        <div className="key flex-2">
            <span>~</span>
            <span>.</span>
        </div>
        <div className="key flex-2">
            <span>!</span>
            <span>1</span>
        </div>
        <div className="key flex-2">
            <span>@</span>
            <span>2</span>
        </div>
        <div className="key flex-2">
            <span>#</span>
            <span>3</span>
        </div>
        <div className="key flex-2">
            <span>$</span>
            <span>4</span>
        </div>
        <div className="key flex-2">
            <span>%</span>
            <span>5</span>
        </div>
        <div className="key flex-2">
            <span>^</span>
            <span>6</span>
        </div>
        <div className="key flex-2">
            <span>&</span>
            <span>7</span>
        </div>
        <div className="key flex-2">
            <span>*</span>
            <span>8</span>
        </div>
        <div className="key flex-2">
            <span>(</span>
            <span>9</span>
        </div>
        <div className="key flex-2">
            <span>)</span>
            <span>0</span>
        </div>
        <div className="key flex-2">
            <span>_</span>
            <span>-</span>
        </div>
        <div className="key flex-2">
            <span>+</span>
            <span>=</span>
        </div>
        <div className="key span-lg flex-down">backspace</div>
        {/* <!-- row 2 --> */}
        <div className="key span-lg flex-down">tab</div>
        <LetterKey letter='a' keyPressed={keyPressed} correct={correct}/>
        <div className="key letter">w</div>
        <div className="key letter">e</div>
        <div className="key letter">r</div>
        <div className="key letter">t</div>
        <div className="key letter">y</div>
        <div className="key letter">u</div>
        <div className="key letter">i</div>
        <div className="key letter">0</div>
        <div className="key letter">p</div>
        <div className="key flex-2">
            <span>{'{'}</span>
            <span>[</span>
        </div>
        <div className="key flex-2">
            <span>{'}'}</span>
            <span>]</span>
        </div>

        <div className="key flex-2">
            <span>|</span>
            <span>\</span>
        </div>
        {/* <!-- row 3 --> */}
        <div className="key span-xl flex-down"> caps lock</div>
        <div className="key letter">a</div>
        <div className="key letter">s</div>
        <div className="key letter">d</div>
        <div className="key letter">f</div>
        <div className="key letter">g</div>
        <div className="key letter">h</div>
        <div className="key letter">j</div>
        <div className="key letter">k</div>
        <div className="key letter">l</div>
        <div className="key flex-2">
            <span>:</span>
            <span>;</span>
        </div>
        <div className="key flex-2">
            <span>"</span>
            <span>'</span>
        </div>
        <div className="key span-xl flex-down right">enter</div>
        {/* <!-- row 4 --> */}
        <div className="key span-xxl flex-down">shift</div>
        <div className="key letter">z</div>
        <div className="key letter">x</div>
        <div className="key letter">c</div>
        <div className="key letter">v</div>
        <div className="key letter">b</div>
        <div className="key letter">n</div>
        <div className="key letter">m</div>
        <div className="key flex-2">
            <span>{'<'}</span>
            <span>,</span>
        </div>
        <div className="key flex-2 correct">
            <span>{'>'}</span>
            <span>.</span>
        </div>
        <div className="key flex-2">
            <span>?</span>
            <span>/</span>
        </div>
        <div className="key span-xxl flex-down right wrong">shift</div>
        {/* <!-- row 5 --> */}
        <div className="key span-sxl flex-down">control</div>
        <div className="key span-xl flex-down center">option</div>
        <div className="key span-xxxxl flex-down">space</div>
        <div className="key span-xl flexdown center">option</div>
        <div className="key span-xxxl flexdown right">control</div>

    </div>
    )
}
function LetterKey({letter,keyPressed, correct}) {
    const pressed=keyPressed==='a'
    console.log(pressed);
 let className='key letter';
    if(pressed) {

        if (correct) {
            className='key letter correct';
        }
        else {
            className='key letter wrong';
        }
    }
 return <div className={className}>{letter}</div>
}