function isMerge(s, part1, part2) {
    let added = part1 + part2
    if (added.length === s.length) {
        let filtered = s.replace(added, '');
        if (filtered.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }

}