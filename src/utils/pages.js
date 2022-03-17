export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    const pagesArray = []
    let i

    for (i = 0; i < totalPages; i += 1) {
        pagesArray.push(i + 1)
    }

    return pagesArray
}