console.log("Hello");
arr=[];
n=prompt("Enter the numbers and Enter 'done' When finished");
arr.push(parseInt(n));
while(n!='done')
{
    n=prompt("Enter the numbers and enter 'done' W]hen finished ");
    arr.push(parseInt(n));
}
arr.pop();
console.log(arr);
arr1=arr.filter(el=>el%2!=0)
console.log(arr1);
arr2=arr1.map(el=>el**3);
console.log(arr2);