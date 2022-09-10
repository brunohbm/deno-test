const desire = Deno.args[0];

if (desire === "love") {
     console.log("Love is fake");
} else {
    console.log("You are sad");
}

setTimeout(() => {
    console.log("check");
    console.log(Deno.metrics());
}, 1000);