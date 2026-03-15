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

// API

const loadIssues = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayIssues(data.data);
        });
}

const container = document.getElementById("card-container")

const displayIssues = (issues) => {
    issues.forEach(issue => {


        // console.log(issue);


        const div = document.createElement("div");
          div.innerHTML = `
        <div class="shadow-sm rounded-md border-t-3 p-4 border-purple-600 mt-6 max-w-[256px] pt-4">
            <div class="flex justify-between items-center">

                <div>
                    <img src="./assets/Open-Status.png">
                </div>

                <div class="p-1 rounded-[25px] bg-red-100 w-[80px]">
                    <p class="text-red-600 text-center">${issue.priority}</p>
                </div>

            </div>

            <h1 class="font-bold mb-1 mt-1">${issue.title}</h1>

            <p class="mb-1">${issue.description}</p>

            <div class="flex gap-2 mb-3">
                <div class="p-1 rounded-[25px] bg-red-100 w-[80%]">
                    <p class="text-red-600 text-center">${issue.labels}</p>
                </div>
            </div>

            <hr class="text-gray-300">

            <p class="mb-2 mt-2">#${issue.id} by ${issue.author}</p>
            <p class="mb-2">${issue.updatedAt}</p>
        </div>
       
          `;
             container.appendChild(div);
    });
}

loadIssues();
