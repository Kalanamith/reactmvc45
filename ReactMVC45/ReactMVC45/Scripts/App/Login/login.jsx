

var LoginBox = React.createClass({

	getInitialState: function () {
		return { username: '', password: '' };
	},

	userLogin: function () {

		console.log('clicked');

		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function (data) {

			},
			error: function (xhr, status, error) {
				console.error(this.props.url, status, err.toString());
			}
		});

	},

	render: function () {
		return (
			<div class="container">
 				<form role="form">
					<UserName />
					<Password />
					<SubmitButton onButtonClicked={this.userLogin} />
 				</form>
			</div>
	  );
	}
});

var SubmitButton = React.createClass({
	render: function () {
		return (
			<button type="button" onClick={() => { this.props.onButtonClicked }}>Click</button>
	  );
	}
});

var Password = React.createClass({
	render: function () {
		return (
			<div class="form-group">
				<label for="pwd">Password:</label>
				<input type="password" class="form-control" id="pwd" placeholder="Enter password" />
			</div>
		);
	}
});

var UserName = React.createClass({
	render: function () {
		return (
			<div class="form-group">
				<label for="email">Email:</label>
				<input type="email" class="form-control" id="email" placeholder="Enter email" />
			</div>
		);
	}
});

ReactDOM.render(
	<LoginBox />,
	document.getElementById('LoginContent')
);
