const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

class Quiz
{
	constructor(type, questions, results)
	{

		this.type = type;


		this.questions = questions;

		this.results = results;

		this.score = 0;

		this.result = 0;

		this.current = 0;
	}

	Click(index)
	{
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;


		if(value >= 1)
		{
			correct = index;
		}
		else
		{

			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}


	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}


	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 


class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}


class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}


class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}


	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}


const results = 
[
	new Result("Вам многому нужно научиться", 0),
	new Result("Вы уже неплохо разбираетесь", 8),
	new Result("Ваш уровень выше среднего", 10),
	new Result("Поздравляем Вы успешно прошли вступительные тесты", 13)
];


const questions = 
[
	new Question(" Какая организация ежегодно спасает 3 млн. детей от смерти?  ", 
	[
		new Answer('ООН', 0),
		new Answer("ЮНИСЕФ", 1),
		new Answer("ЮНЕСКО ", 0),
		new Answer("WTO", 0)
	]),
	new Question("Сколько длилась вторая мировая война? ", 
	[
		new Answer('7 лет', 0),
		new Answer("5 лет ", 0),
		new Answer("6 лет", 1),
		new Answer("8 лет", 0)
	]),
	new Question("Какая страна напала на СССР в 1941 году? ", 
	[
		new Answer(' Япония ', 0),
		new Answer("Италия ", 0),
		new Answer("Германия ", 1),
		new Answer("СССР", 0)
	]),
	new Question("Когда официально началась Великая отечественная война? ", 
	[
		new Answer('1 Сентября 1939 года Польша', 0),
		new Answer("1 Ноября 1941 года СССР", 0),
		new Answer("22 Июня 1941 года на СССР", 1),
		new Answer("1 Сентября 1914 года Франция", 0)
	]),
	new Question("Сколько шла первая мировая война ? ", 
	[
		new Answer(' 4 года ', 1),
		new Answer("3 года ", 0),
		new Answer("8 лет ", 0),
		new Answer("нет верного ответа", 0)

	]),
	new Question(" Когда произошел переломный момент в истории СССР во Второй мировой войне? ", 
	[
		new Answer('в 1946 году ', 0),
		new Answer("в 1945 году", 0),
		new Answer("в 1943 году ", 1),
		new Answer("в 1941 году", 0)
	]),
	new Question("Когда официально началась Вторая мировая война и когда закончилась?", 
	[
		new Answer('1 Сентября 1939 -1945 года Польша', 1),
		new Answer("1 Ноября 1941 -1945 года СССР ", 0),
		new Answer("22 Июня 1941 -1947 года Беларусь ", 0),
		new Answer("1 Сентября 1914 -1918 года Франция", 0)
	]),
	new Question("В каком году в независимом Узбекистане был установлен «День памяти и почестей» ", 
	[
		new Answer('1989 ', 0),
		new Answer("1998 ", 1),
		new Answer("2012", 0),
		new Answer("2013", 0)
	]),
	new Question("Выделите фамилию семьи, которая усыновила 14 детей во время Второй мировой войны?", 
	[
		new Answer('Шомуродовых ', 0),
		new Answer("Мухамеддовых", 0),
		new Answer("Шомахмудовых", 1),
		new Answer("Шариповыми", 0)
	]),
	new Question("Как называется территория, где идут военные действия?", 
	[
		new Answer('Тыл', 0),
		new Answer("фронт", 1),
		new Answer("Граница", 0),
		new Answer("Театр", 0)
	]),
	new Question("Сколько государств в настоящее время являются членами ООН?", 
	[
		new Answer('220 государств', 0),
		new Answer("более 190 государств ", 1),
		new Answer("более 200 государств", 0),
		new Answer("более 150 государств", 0)
	]),
	new Question("Что означает термин «Президент»? ", 
	[
		new Answer('глава государства', 1),
		new Answer("говорящий", 0),
		new Answer("священник ", 0),
		new Answer("впереди сидящий ", 0)
	]),
	new Question("Когда Ислам А. Каримов. был избран на альтернативной основе Президентом независимой Республики Узбекистана?", 
	[
		new Answer('в 1991 года', 1),
		new Answer("в 1993 года ", 0),
		new Answer("в 1999 года ", 0),
		new Answer("в 1998 года ", 0)
	]),
	new Question("Когда была организована ООН (Организация объединенных наций)? ", 
	[
		new Answer('в 24 октября 1946 года ', 0),
		new Answer("в 24 октября 1945 года", 1),
		new Answer("в 24 сентября 1945 года", 0),
		new Answer("в 24 ноября 1941 года", 0)
	]),
	new Question("Когда в Узбекистане была принята «Декларация о суверенитете»? ", 
	[
		new Answer('Август 1991г ', 1),
		new Answer("в 1990 г", 0),
		new Answer("Сентябрь 1989 г", 0),
		new Answer("нет праильного ответа ", 0)
	]),

	
];


const quiz = new Quiz(1, questions, results);

Update();


function Update()
{

	if(quiz.current < quiz.questions.length) 
	{

		headElem.innerHTML = quiz.questions[quiz.current].text;


		buttonsElem.innerHTML = "";


		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		

		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		Init();
	}
	else
	{

		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Ваши очки: " + quiz.score;
	}
}

function Init()
{

	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{

		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{

	let correct = quiz.Click(index);


	let btns = document.getElementsByClassName("button");


	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{

		btns[index].className = "button button_correct";
	}


	setTimeout(Update, 1000);
}