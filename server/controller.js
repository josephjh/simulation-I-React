module.exports = {
    newMessage: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, img, price} = req.body;
        dbInstance.createMessage(name, img, price).then((response) => {
            console.log(response[0])
            res.status(201).send(response[0])
        }).catch((err) => {
            console.log(err)
        })
    },
    getAllMessages: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.getAllMessages().then((response) => {
            res.send(response)}).catch((err) => {console.log(err)})
    },
    getMessage: (req, res) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params
        dbInstance.getMessage(id).then((response) => {
            if(response[0]){
                res.status(200).send(reponse[0])
            }else {
                res.sendStatus(404)
            }
        }).catch((err) => {
            console.log(err)
        })
    },
    deleteMessage: (req, res) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        dbInstance.deleteMessage(id).then(() => {
            console.log('It got deleted');
            res.send(200)
        }).catch((err) => {
            console.log(err)
        })
    }
}