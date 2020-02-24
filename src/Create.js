import React from 'react'
class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            income: '',
            expenses: ''};

        if(localStorage.getItem("income_index") !== ''){
            let incomes = [];
            console.log(incomes[localStorage.getItem("income_index")]);
            incomes = JSON.parse(localStorage.getItem("incomes"));
            this.state.income = incomes[localStorage.getItem("income_index")];
            console.log("Heeey income");
        }

        if(localStorage.getItem("expense_index") !== ''){
            let expenses = [];
            console.log(expenses[localStorage.getItem("expense_index")]);
            expenses = JSON.parse(localStorage.getItem("expenses"));
            this.state.expenses = expenses[localStorage.getItem("expense_index")];
            console.log("Heeey expense");
        }

        this.handleChangeIncome = this.handleChangeIncome.bind(this);
        this.handleChangeExpenses = this.handleChangeExpenses.bind(this);
        this.handleSubmitIncome = this.handleSubmitIncome.bind(this);
        this.handleSubmitExpenses = this.handleSubmitExpenses.bind((this));
    }

    editIncome(index) {

    }

    editExpense(index){
        this.props.history.push('/edit');
        localStorage.setItem("expense_index", index);
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

        if(localStorage.getItem("income_index") !== ''){
            incomes[localStorage.getItem("income_index")] = (this.state.income);
            localStorage.setItem("income_index", '')
            console.log("updated");
        }
        else{
            incomes.push(this.state.income);
            console.log("created");
        }

        localStorage.setItem("incomes", JSON.stringify(incomes));
        event.preventDefault();
    }

    handleSubmitExpenses(event) {
        let expenses = [];
        if(localStorage.getItem("expenses") != null){
            expenses = JSON.parse(localStorage.getItem("expenses"));
        }

        if(localStorage.getItem("expense_index") !== ''){
            expenses[localStorage.getItem("expense_index")] = (this.state.expenses);
            localStorage.setItem("expense_index", '');
            console.log("updated");
        }
        else{
            expenses.push(this.state.expenses);
            console.log("created");
        }

        localStorage.setItem("expenses", JSON.stringify(expenses));
        event.preventDefault();
    }

    render() {
        return (
            <div className="form-group">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                    <form onSubmit={this.handleSubmitIncome}>
                        <label>
                            Income
                            <input type="text" value={this.state.income} onChange={this.handleChangeIncome} />
                        </label>
                        <input type="submit" value="Отправить" className="btn-primary"/>
                    </form>
                    </div>
                    <form onSubmit={this.handleSubmitExpenses}>
                        <label>
                            Expenses
                            <input type="text" value={this.state.expenses} onChange={this.handleChangeExpenses} />
                        </label>
                        <input type="submit" value="Отправить" className="btn-primary"/>
                    </form>
                </div>
            </div>
        );
    }
}
export default Create
