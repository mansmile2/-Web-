let badsalary = prompt("Введите вашу зарплату");

let calculateSalary = function (badsalary) {

    let cleansalary;

    if (badsalary<100000){

      cleansalary = (badsalary*0.65);
    }

    else {

      cleansalary = (badsalary*0.55);
    }

    return Math.round(cleansalary);
  };

  alert('Ваша «чистая» зарплата состовляет: '+calculateSalary(badsalary));