const express = require('express');
const router = express.Router();
let User = require('../user.model')


router.route('/user').post((req,res) => {
    const occupation = req.body.occupation
    const total_cost = req.body.total_cost
    const loan = req.body.loan
    const salary_day =req.body.salary_day
    const salary = req.body.salary
    const shopping_credit = req.body.shopping_credit
    const down_payment = req.body.down_payment
    const monthly_instalment = req.body.monthly_instalment
    const tenure = req.body.tenure


    const newUser = new User({occupation,total_cost,loan,salary_day,salary,shopping_credit,down_payment,monthly_instalment,tenure})
    newUser.save()
    .then(()=>res.json('details added'+" "+ newUser))
    .catch(err=>res.status(400).json('error'+err));

});
router.get('/',(req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h1>home</h1>')
    // .then(()=>res.json('details added'))
    // .catch(err=>res.status(400).json('error'+err));

});

module.exports = router;