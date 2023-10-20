
var nameIn = document.getElementById('name');
var emailIn = document.getElementById('email');
var phoneIn = document.getElementById('phone');
var addressIn = document.getElementById('address');


function add(){
    // console.log(nameIn.value +' '+emailIn.value+' '+phoneIn.value+' '+address.value)

    if(nameIn.value=='' || emailIn.value=='' || phoneIn.value=='' || addressIn.value ==''){
        alert("All fileds are required!")
    }else{
        // <tr></tr>
        var row = document.createElement('tr'); 
        // <td></td>
        var nameTd = document.createElement('td');
         // <td></td>
        var emailTd = document.createElement('td');
         // <td></td>
        var phoneTd = document.createElement('td');
         // <td></td>
        var addressTd = document.createElement('td');
         // <td></td>
        var actionTd = document.createElement('td');
         // <button></button>
        var deleteButton = document.createElement('button');
         // <button></button>
        var editButton = document.createElement('button');

        // <button>Delete</button>
        deleteButton.innerHTML = 'Delete';
        // <button>Edit</button>
        editButton.innerHTML = 'Edit';

        // <button class = 'btn btn-danger'>Delete</button>
        deleteButton.setAttribute('class','btn btn-danger');
        
        // <button class = 'btn btn-primary'>Edit</button>
        editButton.setAttribute('class','btn btn-primary');

        // <button class = 'btn btn-danger' onclick='deleteClient(this)'>Delete</button>
        deleteButton.setAttribute('onclick','deleteClient(this)');
        // <button class = 'btn btn-primary' onclick='ditClient(this)'>Edit</button>
        editButton.setAttribute('onclick','editClient(this)');

        // <td>NameIN.value(la valeur saisie dans l input name)</td>
        nameTd.innerHTML = nameIn.value;
        emailTd.textContent=emailIn.value;
        phoneTd.textContent=phoneIn.value;
        addressTd.textContent=addressIn.value;
        // <td>button delete et button edit</td>
        actionTd.append(deleteButton,editButton);
        

        // ajouter tt les td remplis dans le tr
        row.append(nameTd,emailTd,phoneTd,addressTd,actionTd);

        //recuperer le tableau par id
        let tab = document.getElementById('table');

        //ajouter le tr remplis par les tds dans le tableau
        tab.append(row);

        // vider les inputs apres click sur le button
        nameIn.value = '';
        emailIn.value = '';
        addressIn.value='';
        phoneIn.value='';


    }
 
}

function deleteClient(r){

    //r is the button | r.parentElement is the td | r.parentElement id the tr. so row is tr
    var row = r.parentElement.parentElement;
    //recuperer l'indice de ligne ou row
    var index = row.rowIndex;
    //pour supprimer la ligne
    document.getElementById('table').deleteRow(index);
    
}

function editClient(r){


    let row = r.parentElement.parentElement;
    console.log(row)
    let nameCell = row.cells[0];
    let emailCell = row.cells[1];
    let phoneCell = row.cells[2];
    let addressCell = row.cells[3];

    let newName = prompt('enter updated name: ',nameCell.innerHTML);

    row.cells[0].innerHTML = newName;

    

}