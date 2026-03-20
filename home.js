const allTab = document.getElementById("allBtn");
const openTab = document.getElementById("openBtn");
const closedTab = document.getElementById("closedBtn");
let allIssues = [];




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

            allIssues = data.data;

            updateCounts(allIssues);

            displayIssues(allIssues);

        });
}

const container = document.getElementById("card-container")

const displayIssues = (issues) => {
    container.innerHTML = "";


    issues.forEach(issue => {

        const div = document.createElement("div");

        div.innerHTML = `
        <div onclick="loadSingleIssue(${issue.id})"
        class="shadow-sm rounded-md border-t-3 p-4 border-purple-600 mt-6 max-w-[256px] pt-4">

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

const loadSingleIssue = (id) => {

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            const issue = data.data;

            document.getElementById("modal-title").innerText = issue.title;
            document.getElementById("modal-description").innerText = issue.description;
            document.getElementById("status").innerText = issue.status;
            document.getElementById("name").innerText = issue.assignee;
            document.getElementById("date").innerText = issue.updatedAt;
            document.getElementById("label").innerText = issue.labels;
            document.getElementById("na_me").innerText = issue.assignee;

            document.getElementById("priority").innerText = issue.priority;

          

            my_modal_1.showModal();
        });
}

const searchIssues = () => {
    const searchText = document.getElementById("searchInput").value;

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            const issues = data.data;

            // search result show
            displayIssues(issues);

            // count update
            updateCounts(issues);

            // top count change
            document.getElementById("count").innerText = issues.length;
        });
}

document.getElementById("searchInput").addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        searchIssues();
    }
});


const updateCounts = (issues) => {

    const openIssues = issues.filter(issue => issue.status === "open");
    const closedIssues = issues.filter(issue => issue.status === "closed");

    document.getElementById("allCount").innerText = issues.length;
    document.getElementById("openCount").innerText = openIssues.length;
    document.getElementById("closedCount").innerText = closedIssues.length;

    document.getElementById("count").innerText = issues.length;


}

function filterIssues(type){
    let filtered = [];

    if(type === "all"){
        filtered = allIssues;
    }

    if(type === "open"){
        filtered = allIssues.filter(issue => issue.status === "open");
    }

    if(type === "closed"){
        filtered = allIssues.filter(issue => issue.status === "closed");
    }

    
    displayIssues(filtered);


    document.getElementById("count").innerText = filtered.length;
}

toggleStyle('allBtn');
loadIssues();
