	(function () {
		var __name__ = '__main__';
		var Dog = __class__ ('Dog', [Animal], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, py_name) {
				__super__ (Dog, '__init__') (self, py_name, 'meat', 'wooof');
			});}
		});
		__pragma__ ('<all>')
			__all__.Dog = Dog;
			__all__.__name__ = __name__;
		__pragma__ ('</all>')
	}) ();
