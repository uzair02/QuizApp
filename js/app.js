const Questions = [{
    'que':'What is the primary goal of Data Science?',
    'a':'Designing visually appealing dashboards',
    'b':'Analyzing and interpreting data to gain insights',
    'c':'Developing complex algorithms for software applications',
    'd':'Creating graphical user interfaces (GUIs)',
    'correct':'b'
},
{
    'que':'What does Data Scraping involve?',
    'a':'Collecting data from physical sources like books and papers',
    'b':'Extracting data from web pages or online sources',
    'c':'Generating random data for statistical analysis',
    'd':'Gathering data from structured databases only',
    'correct':'b'
},
{
    'que':'Which category of Machine Learning does the decision tree algorithm belong to?',
    'a':'Supervised Learning',
    'b':'Unsupervised Learning',
    'c':'Reinforcement Learning',
    'd':'Semi-supervised Learning',
    'correct':'a'
},
{
    'que':'Which type of neural network architecture is primarily used for image recognition tasks?',
    'a':'Recurrent Neural Networks (RNN)',
    'b':'Convolutional Neural Networks (CNN)',
    'c':'Generative Adversarial Networks (GAN)',
    'd':'Multilayer Perceptrons (MLP)',
    'correct':'b'
},
{
    'que':'Which of the following is not a key step in the Data Science process?',
    'a':'Data Cleaning and Preprocessing',
    'b':'Model Building and Training',
    'c':'Data Visualization',
    'd':'Building Physical Data Centers',
    'correct':'d'
}
]

let index = 0;
let right = 0, wrong = 0;
let total = Questions.length;
const queBox = document.getElementById("queBox");
const optionInput = document.querySelectorAll(".option")
console.log(total);
const loadQuestion = () => {
    if(index === total){return endQuiz()}
    reset();
    const data = Questions[index];
    console.log(data);
    queBox.innerHTML = `${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerHTML = data.a;
    optionInput[1].nextElementSibling.innerHTML = data.b;
    optionInput[2].nextElementSibling.innerHTML = data.c;
    optionInput[3].nextElementSibling.innerHTML = data.d;

}

const submitQuiz = () => {
    const data = Questions[index];
    const ans = getAns();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return
}

const getAns = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                console.log(input.value)
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
                input.checked = false;
            }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center; margin-top: 20px;">
        <h2>Thank you for taking the quiz</h2>
        <h3>${right} / ${total} are correct</h3>
    </div>

    <div class="bar-container" style="width: 80%; margin: 20px auto; background-color: #f1f1f1; height: 30px; border-radius: 5px; display: flex; overflow: hidden;">
    <div class="bar correct" style="width: ${(right / total) * 100}%; height: 100%; background-color: #44bd32; text-align:center;"></div>
    <div class="bar wrong" style="width: ${(wrong / total) * 100}%; height: 100%; background-color: #e84118; text-align:center;"></div>
    </div>
    `;

    
}

loadQuestion();
