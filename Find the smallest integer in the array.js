class SmallestIntegerFinder {
    findSmallestInt(args) {
        let current = args[0];
        for( let i = 0; i < args.length; i++) {
            if ( args[i] < current) current = args[i];
        }
        return current;
    }
}