const quizData =[
    {
        question: "Quero um PC...",
        a: "Básico: Apenas para assistir vídeos, salvar arquivos, navegar pela internet e utilizar programas leves",
        b: "Médio: Capaz de rodar gráficos 3D em games ou outros softwares com performance mediana, editar vídeos com rapidez e para trabalhar com projetos 3D de qualidade gráfica média",
        c: "Gamer: Roda qualquer jogo de última geração com alta qualidade e velocidade, bom para trabalhar com projetos 3D de alta qualidade gráfica",
        d: "Ultra: Roda qualquer jogo de última geração com qualidade e velocidade extremamente altas, trabalhar com projetos 3D de altíssima qualidade e com RayTracing",
        correct: "d",
    },
    {
        question: "Flexibilidade do PC",
        a: "Normal: Leva cerca de 3 minutos para ligar",
        b: "Médio: Leva cerca de 3 minutos para ligar e é capaz de rodar vários programas pesados ao mesmo tempo",
        c: "Avançado: Liga em menos de 15 segundos",
        d: "Ultra: Liga em menos de 15 segundos e é capaz de rodar vários programas pesados ao mesmo tempo",
        correct: "d",
    },
    {
        question: "Memória",
        a: "500gb",
        b: "1000gb",
        c: "1500gb",
        d: "2000gb",
        correct: "d",
    }

];

//Links per question
const question1Map = new Map();
question1Map.set('a', "link-a1")

question1Map.set('b', "https://www.amazon.com.br/Gamer-F%C3%A1cil-Intel-3470S-GeForce/dp/B08M3WTK7M/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1IAPBKN3Z409F&keywords=pc+gamer&qid=1660671161&sprefix=pc+game%2Caps%2C256&sr=8-7&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147")

question1Map.set('c', "link-c1")
question1Map.set('d', "link-d1")

const question2Map = new Map();
question2Map.set('a', "link-a2")
question2Map.set('b', "link-b2")
question2Map.set('c', "link-c2")
question2Map.set('d', "link-d2")

const question3Map = new Map();
question3Map.set('a', "link-a3")
question3Map.set('b', "link-b3")
question3Map.set('c', "link-c3")
question3Map.set('d', "link-d3")

let mapsVec = [question1Map, question2Map, question3Map]



const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let answersVec = []
let linksVec = []
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    answersVec[currentQuiz] = answer
    linksVec[currentQuiz] = mapsVec[currentQuiz].get(answer)
    if(answer) {
        if (answer === quizData[currentQuiz].correct){
            score ++
        }
        currentQuiz ++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `
            <h2>Clique nos links abaixo para realizar suas compras</h2>
            <h3><a href="${linksVec[0]}" target="_blank">PC base</a></h3>
            <h3> SSD, Qnt memória ram: ${linksVec[1]}</h3>
            <h3> HD: ${linksVec[2]}</h3>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})