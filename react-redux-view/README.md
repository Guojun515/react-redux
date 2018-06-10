#REACT 
## React Component自带函数说明
> 
	  /**
	    * 在render之前自动调用，你可以在这个方法里面调用setState改变状态，并且不会导致额外调用一次render
	    */
	  componentWillMount(){
	    console.log('在render之前自动调用，你可以在这个方法里面调用setState改变状态，并且不会导致额外调用一次render');
	  }
	  /**
	    * 在render之后自动调用，从这里开始可以通过this.getDOMNode()获取到组件的DOM节点
	    */
	  componentDidMount(){
	      console.log('在render之后自动调用，从这里开始可以通过this.getDOMNode()获取到组件的DOM节点');
	  }
	  /**
	    * 组件收到新的state，更新view之前自动调用
	    */
	  componentWillUpdate(){
	      console.log('组件收到新的state,更新view之前调用');
	  }
	  /**
	    * 组件收到新的state，更新view完成之后自动调用
	    */
	  componentDidUpdate(){
	      console.log('组件收到新的state，更新view完成之后自动调用');
	  }

