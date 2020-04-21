import React from 'react'

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.expenses = JSON.parse(localStorage.getItem("expenses"));
        this.incomes = JSON.parse(localStorage.getItem("incomes"));
        let summExpenses  = Number(0);
        this.expenses.forEach(function(item){
            summExpenses += parseFloat(item);
        });
        this.summExpenses = summExpenses;
        let summIncomes  = Number(0);
        this.incomes.forEach(function(item){
            summIncomes += parseFloat(item);
        });
        this.summIncomes = summIncomes;
        let message = 'Everything is okey!';
        if (this.summExpenses > this.summIncomes){
            message = 'Your expenses are bigger, then your inputs!';
        }
        this.message = message
        this.listIcomes = this.incomes.map((number) =>
            <tr>
                <td>
                    <div className="row">
                        {number}
                        <button onClick={() => this.editIncome(this.incomes.indexOf(number))} className="btn btn-primary mx-3">
                            Edit
                        </button>
                        <button onClick={() => this.handleDeleteIncomes(this.incomes.indexOf(number))} className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        );

        this.listExpenses = this.expenses.map((number) =>
            <tr>
                <td>
                    <div className="row">
                        {number}
                        <button onClick={() => this.editExpense(this.expenses.indexOf(number))} className="btn btn-primary mx-3">
                            Edit
                        </button>
                        <button onClick={() => this.handleDeleteExpenses(this.expenses.indexOf(number))} className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        );

        this.editIncome = this.editIncome.bind(this);
        this.editExpense = this.editExpense.bind(this);
    }

    editIncome(index) {
        this.props.history.push('/edit');
        localStorage.setItem("income_index", index);
    }

    editExpense(index){
        this.props.history.push('/edit');
        localStorage.setItem("expense_index", index);
    }

    handleDeleteIncomes(index) {
        if (index > -1) {
            this.incomes.splice(index, 1);
        }
        localStorage.setItem("incomes", JSON.stringify(this.incomes));
    }

    handleDeleteExpenses(index) {
        if (index > -1) {
            this.expenses.splice(index, 1);
        }
        localStorage.setItem("expenses", JSON.stringify(this.expenses));
    }

    handleUpdateIncomes(number) {
        const index = this.incomes.indexOf(number);
        //incomes[index] =
        if (index > -1) {
            this.incomes.splice(index, 1);
        }
        localStorage.setItem("incomes", JSON.stringify(this.incomes));
    }

    handleUpdateExpenses(number) {
        const index = this.expenses.indexOf(number);
        if (index > -1) {
            this.expenses.splice(index, 1);
        }
        localStorage.setItem("expenses", JSON.stringify(this.expenses));
    }

    render() {
        return (
            <div>
                {this.message}
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">
                        <table className="table">
                            {this.listIcomes}
                        </table>
                    </div>
                    <div className="col-md-3">
                        <table className="table">
                            {this.listExpenses}
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">
                        <h2>
                            Summ of incomes: {this.summIncomes}
                        </h2>
                    </div>
                    <div className="col-md-3">
                        <table className="table">
                            <h2>
                                Summ of expenses: {this.summExpenses}
                            </h2>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Show