let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg:  layAnEgg => {
        hen.eggCount++;
        return "EGG";
    }
}