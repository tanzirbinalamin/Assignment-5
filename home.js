const allTab = document.getElementById("allBtn");
const openTab = document.getElementById("openBtn");
const closedTab = document.getElementById("closedBtn");




function toggleStyle(id){

     allTab.classList.add('bg-gray-200')
    openTab.classList.add('bg-gray-200')
    closedTab.classList.add('bg-gray-200')


     allTab.classList.remove('btn-primary')
    openTab.classList.remove('btn-primary')
    closedTab.classList.remove('btn-primary')

    const selected=document.getElementById(id);

    selected.classList.remove('bg-gray-200')
    selected.classList.add('btn-primary')
 
}
