class ReviewsController < ApplicationController
  before_action :set_review, only: %i[show edit update destroy]

  def index
    @reviews = Review.all
  end

  def show; end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @review.date_created = Time.current

    if @review.save
      redirect_to @review, notice: 'Review was successfully created.'
    else
      render :new
    end
  end

  def edit; end

  def update
    if @review.update(review_params)
      redirect_to @review, notice: 'Review was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @review.destroy
    redirect_to reviews_url, notice: 'Review was successfully destroyed.'
  end

  private

  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:creator_username, :score, :title, :description, :store_id, images: [])
  end
end
