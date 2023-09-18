export default function formatDate(date, currentOptions) {
    const currentDate = new Date(date)
    let options = currentOptions ? currentOptions : { month: "long", day: "numeric", year: "numeric" };

    return currentDate.toLocaleDateString('en-US', options)
}