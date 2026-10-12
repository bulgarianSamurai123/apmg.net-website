import React from "react";
import Link from "next/link";

const ProductCard = ({ slug, name, client, tech }) => {
  return (
    <div className="flex flex-row">
      <Link href={`/work/${slug}`}>
        <div className="flex flex-col gap-3 bg-card-white-color p-7 rounded-2xl">
          <p className="self-start bg-white-lilac text-waterloo px-10 py-16 rounded-2xl">
            [INSERT IMAGE]
          </p>

          <h3 className="h3Text">{name}</h3>
          <p className="h3SubText">
            {client} · {tech}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
