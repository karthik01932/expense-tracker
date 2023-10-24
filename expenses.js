let expenses = [];
let totalAmount =0;

const categoryselect = document.getElementById('categoryselect');
const amountinput = document.getElementById('amountinput');
const descriptioninput = document.getElementById('descriptioninput');
const dateinput = document.getElementById('dateinput');
const expensetablebody =document.getElementById('expensetablebody');
const totalamountvalue = document.getElementById('totalamount');
const addbtn = document.getElementById('addbtn');

addbtn.addEventListener('click', function(){
    const category = categoryselect.value;
    const amount = Number(amountinput.value);
    const description = descriptioninput.value;
    const date = dateinput.value;

    if(category === ' '){
        alert('please select a category');
        return;
    }
    if(isNaN(amount) || amount <=0){
        alert('please enter valid amount');
        return;
    }
    if(description ===' '){
        alert('please enter the description');
        return;
    }
    if(date ===' '){
        alert('please select a date');
        return;
    }
    expenses.push({category, amount, description, date});

    totalAmount = totalAmount + amount;
    totalamountvalue.textContent = totalAmount;


    const newrow = expensetablebody.insertRow();
    const categorycell = newrow.insertCell();
    const amountcell = newrow.insertCell();
    const descriptioncell = newrow.insertCell();
    const datecell = newrow.insertCell();
    const deleteCell = newrow.insertCell();


    // for creating and deleting the table list 
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('delete-btn');
    deletebtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalAmount =  totalAmount - expense.amount;
        totalamountvalue.textContent = totalAmount;
        expensetablebody.removeChild(newrow);
    });

    const editbtn = document.createElement('button');
    editbtn.textContent = 'Edit';
    editbtn.classList.add('edit-btn');
    editbtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalAmount =  totalAmount - expense.amount;
        totalamountvalue.textContent = totalAmount;
        expensetablebody.removeChild(newrow);
    });


    // this print the data what we have added "ADD"
    const expense = expenses[expenses.length -1];
    categorycell.textContent = expense.category;
    amountcell.textContent = expense.amount;
    descriptioncell.textContent = expense.description;
    datecell.textContent = expense.date;
    deleteCell.appendChild(deletebtn);
    deleteCell.appendChild(editbtn);
});

for(const expense of expenses){
    totalAmount = totalAmount + expense.amount;
    totalamountvalue.textContent = totalAmount;

    const newrow = expensestablebody.insertRow();
    const categorycell = newrow.insertCell();
    const amountcell = newrow.insertCell();
    const descriptioncell = newrow.insertCell();
    const datecell = newrow.insertCell();
    const deleteCell = newrow.insertCell();
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('delete-btn');
    deletebtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalAmount =  totalAmount - expense.amount;
        totalamountvalue.textContent = totalAmount;
        expensestablebody.removeChild(newrow);
    });
    const editbtn = document.createElement('button');
    editbtn.textContent = 'Edit';
    editbtn.classList.add('edit-btn');
    editbtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalAmount =  totalAmount - expense.amount;
        totalamountvalue.textContent = totalAmount;
        expensetablebody.removeChild(newrow);
    });

    categorycell.textContent = expense.category;
    amountcell.textContent = expense.amount;
    datecell.textContent = expense.date;
    descriptioncell.textContent = expense.description;
    deleteCell.appendChild(deletebtn);
    deleteCell.appendChild(editbtn);

}