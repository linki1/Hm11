let array = [1, 2, 3, 4, 5, 6, 7];

let usnum = +prompt(`який елемент масиві: ${array}: ви хочите видалити?`);
console.log(usnum);
while (!usnum || isNaN(usnum)) {
    alert('неправильне число');
    usnum = +prompt(`який елемент масиві: ${array}: ви хочите видалити?`);
}


function removeElement(arr, a) {
    if (arr.includes(a)) {
        array.splice(--a, 1);
    }

    else {
        alert('такого елементу не існує');
        let usnum = +prompt(`який елемент масиві: ${array}: ви хочите видалити?`);

        while (!usnum && isNaN(usnum)) {
            alert('неправильне число');
            let usnum = +prompt(`який елемент масиві: ${array}: ви хочите видалити?`);
        }

        removeElement(array, usnum);
    }


}

document.write(array);