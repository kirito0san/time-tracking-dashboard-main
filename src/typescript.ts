let Daily = document.querySelector(`#Daily`) as HTMLElement;
let Weekly = document.querySelector(`#Weekly`) as HTMLElement;
let Monthly = document.querySelector(`#Monthly`) as HTMLElement;
let time = document.querySelectorAll(`.time`) as NodeListOf<HTMLDivElement>;
let lastTime = document.querySelectorAll(`.lastTime`) as NodeListOf<HTMLDivElement>;
let date = document.querySelectorAll(`.date`) as NodeListOf<HTMLDivElement>;

let one = fetch(`../data.json`)
  .then((data) => {
    return data.json();
  })
  .then((e) => {
    console.log(e);
    date.forEach((el) => {
      el.addEventListener(`click`, () => {
        if (!el.classList.contains(`text-white`)) {
          date.forEach((el) => {
            el.classList.remove(`pl-5`);
            el.classList.remove(`text-white`);
            el.classList.remove(`text-2xl`);
            el.classList.remove(`font-medium`);
          });
          el.classList.add(`pl-5`);
          el.classList.add(`text-white`);
          el.classList.add(`text-2xl`);
          el.classList.add(`font-medium`);
        }
      });
    });
    // if (Daily.classList.contains(`pl-5`)) {
    //     Daily.classList.remove(`pl-5`);
    //     Daily.classList.remove(`text-white`);
    //     Daily.classList.remove(`text-2xl`);
    //     Daily.classList.remove(`font-medium`);
    //   }

    Daily.addEventListener(`click`, () => {
      for (let i = 0; i < time.length; i++) {
        time[i].innerHTML = `${
          e[i].timeframes.daily.current == 1
            ? (time[i].innerHTML = `${e[i].timeframes.daily.current}hr`)
            : (time[i].innerHTML = `${e[i].timeframes.daily.current}hrs`)
        }`;
      }
      for (let i = 0; i < time.length; i++) {
        lastTime[i].innerHTML = `${
          e[i].timeframes.daily.previous == 1
            ? (lastTime[i].innerHTML = `Previous - ${e[i].timeframes.daily.previous}hr`)
            : (lastTime[i].innerHTML = `Previous - ${e[i].timeframes.daily.previous}hrs`)
        }`;
      }
    });
    Weekly.addEventListener(`click`, () => {
      for (let i = 0; i < time.length; i++) {
        time[i].innerHTML = `${e[i].timeframes.weekly.current}hrs`;
      }
      for (let i = 0; i < time.length; i++) {
        lastTime[i].innerHTML = `Previous - ${e[i].timeframes.weekly.previous}hrs`;
      }
    });
    Monthly.addEventListener(`click`, () => {
      for (let i = 0; i < time.length; i++) {
        time[i].innerHTML = `${e[i].timeframes.monthly.current}hrs`;
      }
      for (let i = 0; i < time.length; i++) {
        lastTime[i].innerHTML = `Previous - ${e[i].timeframes.monthly.previous}hrs`;
      }
    });
  });
