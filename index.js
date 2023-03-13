//console.log('funguju');

/*
const goodbye = () => {
    let email__closingElm = document.querySelector('.email__closing');
    email__closingElm.textContent = 'Na shledanou';
}
*/

/*
const fillBody = (body, name) => {
    let email__bodyElm = document.querySelector('.email__body');
    email__bodyElm.textContent = body;

    goodbye(name);
}
*/

const goodbye = (name) => {
    let email__closingElm = document.querySelector('.email__closing');
    email__closingElm.textContent = 'Na shledanou ' + name;
}

const fillSubject = (subject) => {
    let email__subjectElm = document.querySelector('.email__subject');
    email__subjectElm.textContent = subject;
}

/*
Zde pokračuje váš program
*/

const formalGoodbye = (name) => {
    return `S uctivou poklonou ${name}`
}

const rudeGoodbye = (name) => {
    return `Se měj ${name}`
}

const fillBody = (body, name, goodbyeFunction) => {
    let email__bodyElm = document.querySelector('.email__body');
    email__bodyElm.textContent = body;

    let email__closingElm = document.querySelector('.email__closing');
    email__closingElm.textContent = goodbyeFunction(name);
}