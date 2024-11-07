import PropTypes from "prop-types";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((item) => {
        return (
          <li key={item.id}>
            Book-name {item.name} with id {item.id}
          </li>
        );
      })}
    </ul>
  );
};

export function Books({}) {
  return (
    <>
      <BookList books={favouriteBooks} />
    </>
  );
}

export function RandomText({ children }) {
  return <div>{children}</div>;
}

export function Chease({ children }) {
  return <div>{children}</div>;
}
