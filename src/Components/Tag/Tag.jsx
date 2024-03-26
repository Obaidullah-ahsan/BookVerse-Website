const Tag = ({ tag }) => {
  return (
    <div>
      <a className="border px-3 py-1 rounded-2xl font-semibold text-[#23BE0A] bg-[#23BE0A1A]">
        {tag}
      </a>
    </div>
  );
};

export default Tag;
