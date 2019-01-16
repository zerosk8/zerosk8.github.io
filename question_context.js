class QuestionContext {
    constructor(urlBackgoundImage,question,listOfAnswers) {
        this._urlBackgoundImage = urlBackgoundImage;
        this._question = question;
        this._listOfAnswers = listOfAnswers;
    }

    set urlBackgoundImage(url) {
        this._urlBackgoundImage = url;
    }

    set question(question) {
        this._question = question;
    }
    get urlBackgoundImage() {
        return this._urlBackgoundImage;
    }

    get question() {
        return this._question;
    }

    get listOfAnswers() {
        return this._listOfAnswers;
    }

    addAnswer(answer) {
        this._listOfAnswers.push(answer);
    }
}