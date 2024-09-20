import Card from "@/components/molecules/Card/Card";
import img from "@/public/product-headphones.webp";
function List() {
    return (
        <ul className="list-none">
            <Card
                title={"Card 1"}
                price={"$100"}
                img={img}
                button={"Button 1"}
            />
            <Card
                title={"Card 2"}
                price={"$200"}
                img={img}
                button={"Button 2"}
            />
            <Card
                title={"Card 3"}
                price={"$300"}
                img={img}
                button={"Button 3"}
            />
        </ul>
    )
}

export default List;