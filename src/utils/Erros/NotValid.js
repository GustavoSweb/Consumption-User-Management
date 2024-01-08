class NotValid extends Error{
    constructor(message){
        super(message)
        this.name = 'NotValid'
        this.form = true
    }
}

export default NotValid