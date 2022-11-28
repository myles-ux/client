import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { diffDays } from "../../actions/hotel";
import { currencyFormatter } from "../../actions/stripe";

const SmallCard = ({ h, handleDelete = (f) => f }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              src='https://via.placeholder.com/900x500.png?text=MERN+HOTELS'
              alt='hotel_image'
              className='card-image img img-fluid'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h3 className='card-title'>
                {h.title}{" "}
                <span className='float-right text-primary'>
                  {currencyFormatter({
                    amount: h.price,
                    currency: "eur",
                  })}
                </span>
              </h3>
              <p className='alert alert-info'>{h.location}</p>
              <p className='card-text'>{`${h.content.substring(1, 300)}...`}</p>
              <p className='card-text'>
                <span className='float-right text-primary'>
                  For {diffDays(h.from, h.to)}{" "}
                  {diffDays(h.from, h.to) <= 1 ? "day" : "days"}
                </span>
              </p>
              <p className='card-text'>{h.bed} Bed</p>
              <p className='card-text'>
                Availbale from {new Date(h.from).toLocaleDateString()}
              </p>

              <div className='d-flex justify-content-between h4'>
                <button
                  onClick={() => navigate(`/hotel/${h._id}`)}
                  className='btn btn-primary'
                >
                  Show more
                </button>
                <Link to={`/hotel/edit/${h._id}`}>
                  <EditOutlined className='text-warning' />
                </Link>
                <Link onClick={() => handleDelete(h._id)}>
                  <DeleteOutlined className='text-danger' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
