console.log("Hello");
class user {
    constructor(Name, Age,Email) {
      this.Name = Name;
      this.Age = Age;
      this.Email = Email;
      this.lucoins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.Name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.Name} has logged out`);
        return this;
    }
}


class Moderator extends user{
    
        addCoins(){
            this.lucoins++;
            console.log(`${this.Name} has ${this.lucoins} coins`);
            return this;
        }
        removeCoins(){
            this.lucoins--;
            console.log(`${this.Name} has ${this.lucoins} coins`);
            return this;
 
        }
    }


class Admin extends Moderator{
   addCourse(User,course){
       User.courses.push(course);
   }
}


let user1 = new user('Tokyo',27,'tokyo@gmail.com')
let user2 = new user('professor',31,'prof@gmai.com')
let moderator = new Moderator('Denver',26,'den@gmail.com','Moderator');
let admin1 = new Admin('Rio',25,'rio@gmail.com');
let users = [user1,user2,moderator,admin1];
console.log(user1);
console.log(user2);
admin1.login();
admin1.addCourse(admin1,'Javascript');
admin1.addCourse(admin1,'python');
admin1.addCoins();
admin1.addCoins();
admin1.removeCoins();
admin1.logout();
console.log(admin1);
