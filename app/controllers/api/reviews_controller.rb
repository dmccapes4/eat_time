class Api::ReviewsController < ApplicationController
  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])

    if @review.update_attributes(review_params)
      render :show
    elsif !@review
      render json: ['Could not find restaurant'], status: 400
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def index
    @reviews = Review.all
  end

  def review_params
    params.require(:review).permit(
      :reservation_id, :rating, :title, :body
    )
  end
end
