let Person = { name: "pedro", age: 28, email: "pdero@email.com" };
Person = { ...Person, username: "perdoTech", country: "Brazil" };
console.log(Person);

for(const i in Person)
{
    console.log(Person[i])
}
