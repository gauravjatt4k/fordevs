interface HelloWord {
	stack: string
	msg: string
}

function helloWorld() {
	const data: HelloWord = {
		stack: 'tsx',
		msg: 'Hello World!',
	}
	console.log(data)
}

helloWorld()
