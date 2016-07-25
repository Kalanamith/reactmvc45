var LoginBox = React.createClass({

	getInitialState: function () {
		return { username: '', password: '' };
	},

	userLogin: function () {

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
	/*******************************************************************/
	handleSubmit: function (e) {
		e.preventDefault();
		var username = this.refs.username.value.trim();
		var password = this.refs.password.value.trim();
		if (!username || !password) {
			return;
		}
		var data = new FormData();
		data.append('UserName', username);
		data.append('Password', password);

		var xhr = new XMLHttpRequest();
		xhr.open('post', this.props.submitURL, true);
		xhr.send(data);
		//this.props.
	},
	/*******************************************************************/

	render: function () {
		return (
			<div class="container">
 				<form role="form" onSubmit={this.handleSubmit}>
					
					 <div class="form-group">
						<label for="email">Email:</label>
						<input type="email" class="form-control" id="email" placeholder="Enter email" ref="username" />
					 </div>

					 <div class="form-group">
						<label for="pwd">Password:</label>
						<input type="password" class="form-control" id="pwd" placeholder="Enter password" ref="password" />
					 </div>
					 <input type="submit" value="Post" />
 				</form>
			</div>
	  );
	}
});

var Password = React.createClass({
	render: function () {
		return (
			<div class="form-group">
				<label for="pwd">Password:</label>
				<input type="password" class="form-control" id="pwd" placeholder="Enter password" ref="password"/>
			</div>
		);
	}
});

var UserName = React.createClass({
	render: function () {
		return (
			<div class="form-group">
				<label for="email">Email:</label>
				<input type="email" class="form-control" id="email" placeholder="Enter email" ref="username" />
			</div>
		);
	}
});

ReactDOM.render(
	<LoginBox submitURL="/Account/Login" />,
	document.getElementById('LoginContent')
);
