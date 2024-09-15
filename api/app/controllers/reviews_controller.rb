class ReviewsController < ApplicationController
  before_action :set_review, only: %i[show edit update destroy]
  before_action :authenticate
  def index
    page = params[:page]&.to_i || 1
    per_page = params[:per_page]&.to_i || 10

    @reviews = Review.order(created_at: :desc).page(page).per(per_page)
    total_pages = @reviews.total_pages

    render json: {
      reviews: @reviews,
      meta: {
        current_page: page,
        total_pages:,
        per_page:
      }
    }
  end

  def show
    render json: @review
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @review.date_created = Time.current

    if @review.save
      redirect_to @review, notice: 'Review was successfully created.'
    else
      Rails.logger.error(@review.errors.full_messages)
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
