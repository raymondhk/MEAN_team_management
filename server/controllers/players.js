const mongoose = require('mongoose');
const Player = mongoose.model('Player');

module.exports = {
    show: (req, res) => {
        Player.find({})
            .then(players => res.json(players))
            .catch(err => {
                console.log('error');
                res.status(500).json(err);
            });
    },
    create: (req, res) => {
        console.log(req.body);
        let player = new Player(req.body);
        player.save((err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log('success');
            }
        })
    },
    delete: (req, res) => {
        Player.findOneAndRemove({_id: req.params.id}, (err) => {
            if(err){
                return res.send(err)
            }
            return res.json({message: 'Player successfully deleted!'})
        })
    },
    update: (req, res) => {
        let num = req.body.game - 1;
        Player.findById({_id: req.params.id}, (err, player) => {
            if(player){
                console.log(player)
                console.log(player.game[num].status)
                player.game[num].status = req.body.status
                console.log(player.game[num].status)
                player.save((err) => {
                    if(err){
                        return res.send(err)
                    }
                    return res.json({message: 'Player updated!'})
                })
            }
            else{
                console.log('error')
            }
        })
        // Player.update({_id: req.params.id}, {$set: {'game.' + num : {status: req.body.status} }}, (err) => {
        //     if(err){
        //         return res.send(err);
        //     }
        //     console.log('success');
        // })
    }
}