# Angular's 1.5.x component()
The **.component()** method helper is just syntactic sugar of the good old .directive() method we all hate and love. There is practically nothing you can do with .component() that you can't do with .directive().

**.component()** simplifies the way we create "components" - which roughly means UI directives. The component approach pushes the community to use defaults that have become best practices. Here are some defaults that components are shipped with:

1. Components have isolated scopes by default.
2. They automatically use controllerAs syntax therefore we can use $ctrl to access component data.
3. They use controllers instead of link functions.
4. The bindToController option is on by default.
