import { shadowBox, shadowBox2 } from '../../helpers/shadow';
import css from './StyleBox.module.css';
export default function StyleBox() {
  return (
    <>
      <div className={css.mainBox}>
        <h2>Box</h2>
        <p>div &gt; span * 3</p>
        <p> div = transform: rotate(-30deg) skew(25deg) translate(0, 0);</p>
        <p>span = display: block; height/max-width: 80px;</p>
        <hr />
        <div key="qwe">
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </div>
      </div>
      <hr />
      <p>
        B <br />
        span:nth-child(2) <br /> position: absolute; <br /> top: 40px; <br />{' '}
        left: -70px; <br /> width: 80px; <br /> height: 60px; <br />
        transform: skewY(-45deg) rotate(90deg)
      </p>
      <p>skewY</p>
      <hr />
      <p>
        C <br />
        .secondBox div span:nth-child(3) &#123; <br />
        position: absolute; <br />
        bottom: -60px; <br />
        left: -30px; <br />
        width: 100%; <br />
        height: 60px; <br />
        transform: skewX(-45deg) rotate(0deg); <br />
        &#125;
      </p>
      <p>skewX</p>
      <div className={css.secondBox}>
        <div key="qwer">
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </div>
      </div>

      {/* <div>
        <p>Text</p>
      </div> */}
      <hr />
      <h2>Text</h2>
      <p>
        export const shadowBox = () =&gt; &#123; <br />
        let shadow = ''; <br />
        for (let i = 0; i &lt; 15; i++) &#123; <br />
        shadow += `$&#123;-i&#125;px $&#123;i&#125;px 0 #d9d9d9$&#123;i &lt;14 ?
        ',' : ''&#125;`; <br />
        &#125; <br />
        return shadow; <br />
        &#125;;
      </p>
      <p>
        textShadow: shadowBox(), <br /> transform: 'rotate(0deg) skewX(40deg)',
      </p>
      <p>
        <span
          style={{
            letterSpacing: '7px',
            display: 'inline-block',
            fontWeight: '900',
            color: '#fff',
            fontSize: '50px',
            textShadow: shadowBox(),
            transform: 'rotate(0deg) skewX(40deg)',
          }}
        >
          shadow
        </span>
      </p>
      <hr />
      <p>
        export const shadowBox = () =&gt; &#123; <br />
        let shadow = ''; <br />
        for (let i = 0; i &lt; 15; i++) &#123; <br />
        shadow += `$&#123;-i&#125;px $&#123;i&#125;px rgba(0, 0, 0, 0.1)$&#123;i
        &lt;14 ? ',' : ''&#125;`; <br />
        &#125; <br />
        return shadow; <br />
        &#125;;
      </p>
      <p>
        <span
          style={{
            letterSpacing: '7px',
            display: 'inline-block',
            fontWeight: '900',
            color: '#fff',
            fontSize: '50px',
            textShadow: shadowBox2(),
            transform: 'rotate(0deg) skewY(40deg)',
          }}
        >
          shadow
        </span>
        <span>
          {' '}
          textShadow: shadowBox2(), <br /> transform: 'rotate(0deg)
          skewY(40deg)',
        </span>
      </p>
      <hr />
      <p>
        <span
          style={{
            letterSpacing: '7px',
            display: 'inline-block',
            fontWeight: '900',
            color: '#fff',
            fontSize: '50px',
            textShadow: shadowBox(),
            transform: 'rotate(-10deg) skewX(35deg)',
          }}
        >
          shadow
        </span>
        <span>transform: rotate(-10deg) skewX(35deg),</span>
      </p>
      <hr />
      <div>
        <h2>Text</h2>
        <p>
          position: absolute; <br />
          background: linear-gradient(... <br />
          <br />
          ... <br />
          color: transparent;
        </p>
        <h3>-webkit-background-clip: text;</h3>
        <div className={css.clipBox}>
          <p></p>
          <p className={css.clipText}>text</p>
        </div>
      </div>
    </>
  );
}
