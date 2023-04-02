window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const boxes = document.querySelectorAll('.box');

    let wonShowp = document.querySelector('.wonShowp');
    const resetBtn = document.querySelector('.resetBtn');
    var a = 0;
    const X_PLYR = 'X'
    const O_PLYR = 'O'
    let id;
    let currentElement;
    let idArr = [];
    let WinFlag = 0;

    function checkWin(id, currentElement) {

        let arr = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        if (a == 9) {
                wonShowp.innerHTML = 'Game Drawn!!';
            }
        console.log('Array length ' + idArr.length);
        console.log(idArr);
        for (let i = 0; i < arr.length; i++) {

            const newArr = arr[i];
            const a2 = idArr[newArr[0]];
            const b = idArr[newArr[1]];
            const c = idArr[newArr[2]];
            
            if ((currentElement == a2) && (a2 == b) && (a2 == c) && (a2 != '')) {
                console.log(currentElement + "Won!!");
                wonShowp.innerHTML = currentElement + ' Won!!!!';
                WinFlag = 1;
            }
        }
    }


    boxes.forEach((item) => {

        item.addEventListener('click', (e) => {
            if ((e.target.innerHTML != X_PLYR && e.target.innerHTML != O_PLYR) && WinFlag == 0) {

                a=a+1;
                if (a % 2 != 0) {
                    e.target.innerHTML = X_PLYR;
                    currentElement = X_PLYR;
                    id = e.target.id;

                    idArr[id] = currentElement;
                    if (a >= 3) {
                        checkWin(id, currentElement);
                    }
                    

                } else {
                    e.target.innerHTML = O_PLYR;
                    currentElement = O_PLYR;
                    id = e.target.id;
                    idArr[id] = currentElement;
                    if (a >= 3) {
                        checkWin(id, currentElement);
                    }
                    
                }
            }
        })
    })

    resetBtn.addEventListener('click', () => {

        reset();

    })

    function reset() {
        boxes.forEach((item) => {
            item.innerHTML = '';
        })
        WinFlag = 0;
        idArr = [];
        wonShowp.innerHTML = ''
        a = 1;
    }
});
