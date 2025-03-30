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
        span:nth-child(2) <br /> top: 40px; <br /> left: -70px; <br /> width:
        80px; <br /> height: 60px; <br />
        transform: skew(-45deg) rotate(90deg)
      </p>
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
    </>
  );
}
