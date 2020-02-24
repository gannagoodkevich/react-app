import React from 'react'
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            income: '',
            expenses: ''};

        this.handleChangeIncome = this.handleChangeIncome.bind(this);
        this.handleChangeExpenses = this.handleChangeExpenses.bind(this);
        this.handleSubmitIncome = this.handleSubmitIncome.bind(this);
        this.handleSubmitExpenses = this.handleSubmitExpenses.bind((this))
    }

    handleChangeIncome(event) {
        this.setState({income: event.target.value});
    }

    handleChangeExpenses(event) {
        this.setState({expenses: event.target.value});
    }

    handleSubmitIncome(event) {
        let incomes = [];
        if(localStorage.getItem("incomes") != null){
         incomes = JSON.parse(localStorage.getItem("incomes"));
        }
        incomes.push(this.state.income);
        localStorage.setItem("incomes", JSON.stringify(incomes));
        event.preventDefault();
    }

    handleSubmitExpenses(event) {
        let expenses = [];
        if(localStorage.getItem("expenses") != null){
            expenses = JSON.parse(localStorage.getItem("expenses"));
        }
        expenses.push(this.state.expenses);
        localStorage.setItem("expenses", JSON.stringify(expenses));
        event.preventDefault();
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmitIncome}>
                <label>
                    Income
                    <input type="text" onChange={this.handleChangeIncome} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
            <form onSubmit={this.handleSubmitExpenses}>
                <label>
                    Expenses
                    <input type="text" onChange={this.handleChangeExpenses} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
            </div>
        );
    }
}
export default Edit
