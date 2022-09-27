export const compareCreated_At = (a, b) => {
    if (a.created_at < b.created_at) {
        return -1;
    }
    if (a.created_at > b.created_at) {
        return 1;
    }
    return 0;
}

export const compareFiresAsc = (a, b) => {
    if (a.count < b.count) {
        return 1;
    }
    if (a.count > b.count) {
        return -1;
    }
    return 0;
}

export const compareFiresDesc = (a, b) => {
    if (a.count < b.count) {
        return -1;
    }
    if (a.count > b.count) {
        return 1;
    }
    return 0;
}