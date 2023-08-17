function addMarks(){
    let innovation = document.getElementById("innovation").value
    let knowledge = document.getElementById("knowledge").value
    let uniqueness= document.getElementById("uniqueness").value

    let sum = Number(innovation) + Number(knowledge) + Number(uniqueness)

    document.getElementById("totalMarks").innerHTML = sum;
}

const groupOverview = [
    {
        Group: "1",
        Status: "approved",
        ProjectName: "Robo-hr"
    },
    {
        Group: "2",
        Status: "approved",
        ProjectName: "Normal-hr"
    },
    {
        Group: "3",
        Status: "approved",
        ProjectName: "What-hr"
    }
]

function fetchGroupDetails(groupOverview){
    for(let i =0; i<groupOverview.length; i++){
        document.getElementById(`grp-no-${i}`).value = groupOverview[i].Group
        document.getElementById(`status-${i}`).value = groupOverview[i].Status
        document.getElementById(`project-name-${i}`).value = groupOverview[i].ProjectName
    }
}


const groupDetails = [
    {
        Group: 1,
        status: "approved",
        uniqueness: 5,
        knowledge: 10,
        innovation: 15,
        domain: "block-chain",
        problemStatement: "Lorem ipsum dolor sit amet consectetur",
        portal: "Web Application",
        total: 20
    },
    {
        Group: 2,
        status: "approved",
        uniqueness: 5,
        knowledge: 10,
        innovation: 15,
        domain: "block-chain",
        problemStatement: "Lorem ipsum dolor sit amet consectetur",
        portal: "Web Application",
        total: 20
    },
    {
        Group: 3,
        status: "approved",
        uniqueness: 5,
        knowledge: 10,
        innovation: 15,
        domain: "block-chain",
        problemStatement: "Lorem ipsum dolor sit amet consectetur",
        portal: "Web Application",
        total: 20
    },
    {
        Group: 4,
        status: "approved",
        uniqueness: 5,
        knowledge: 10,
        innovation: 15,
        domain: "block-chain",
        problemStatement: "Lorem ipsum dolor sit amet consectetur",
        portal: "Web Application",
        total: 20
    },
]

function getEvaluationResult(groupDetails){
    // let n = document.getElementById("grp-no");
    let n = 1

    let {Group, status, uniqueness, knowledge, innovation, domain, problemStatement, protal, total} = getEvaluationResult(n)

    document.getElementById("status").value = status
    document.getElementById("uniqueness").value = uniqueness
    document.getElementById("knowledge").value = knowledge
    document.getElementById("innovation").value = innovation
    document.getElementById("domain").value = domain
    document.getElementById("problemStatement").value = problemStatement


}