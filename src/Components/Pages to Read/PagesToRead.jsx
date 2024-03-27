import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../LocalStorage/localstorage";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PagesToRead = () => {
  const books = useLoaderData();
  const [readBook, setReadBook] = useState([]);
  useEffect(() => {
    const storedReadBooksId = getStoredReadBooks();
    if (books.length > 0) {
      const bookread = [];
      for (const id of storedReadBooksId) {
        const book = books.find((book) => book.bookId === id);
        if (book) {
          bookread.push(book);
        }
      }
      setReadBook(bookread);
    }
  }, [books]);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="bg-[#13131308] flex items-center justify-center rounded-2xl">
      <ResponsiveContainer height={400}>
        <BarChart
          width={1050}
          height={500}
          data={readBook}
          margin={{
            top: 40,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readBook.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
